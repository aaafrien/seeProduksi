const {
  Product,
  Material,
  Transaction,
  User,
  sequelize,
} = require("../../models");
const productService = require("./productService");
const materialService = require("./materialService");

const transactionService = {
  getAllTransaction: async (id_owner) => {
    const transaction = await Transaction.findAll({
      where: {
        id_owner,
      },
      include: [{ model: User, attributes: ["id", "fullName"] }],
    });
    return transaction;
  },
  addTransaction: async (data) => {
    const t = await sequelize.transaction();
    const errorStack = [];
    let price = 0;
    try {
      const product = await productService.getDataProductById(data.id);
      console.log(product.Materials.length);
      for (let x = 0; x < product.Materials.length; x++) {
        console.log(product.Materials[x].id);
        const material = await materialService.getMaterial(
          product.Materials[x].id
        );
        const value =
          material.stock -
          product.Materials[x].material_quantity * data.quantity;
        if (value < 0) {
          errorStack.push(
            `${material.name} need ${Math.abs(value)} ${material.unit}`
          );
        } else {
          await material.update({ stock: value }, { transaction: t });
          price = price + material.price;
        }
      }
      if (errorStack.length != 0) {
        throw new Error(errorStack);
        // throw new Error("Material is not enough");
      }
      const transaction = await Transaction.create({
        id_product: data.id,
        id_user: data.id_user,
        id_owner: data.id_owner,
        quantity: data.quantity,
        price,
      });
      await t.commit();
      return transaction;
    } catch (error) {
      await t.rollback();
      throw new Error(error);
    }
  },
};

module.exports = transactionService;
