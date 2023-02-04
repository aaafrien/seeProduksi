const materialService = require("../../services/mysql/materialService");

module.exports = {
  handlerGetBahanBaku: async (req, res, next) => {
    try {
      const materials = await materialService.getAllMaterial(req.user.id_owner);
      res.status(200).json({
        status: "Success",
        message: "Successfully get bahan",
        data: materials,
      });
    } catch (error) {
      next(error);
    }
  },
  handlerAddBahanBaku: async (req, res, next) => {
    try {
      const { code, name, type, material_category, price, unit, stock } =
        req.body;

      const material = await materialService.addMaterial({
        code,
        name,
        type,
        material_category,
        price,
        unit,
        stock,
        id_owner: req.user.id_owner,
      });
      
      res.status(201).json({
        status: "Success",
        message: "Successfully add Material",
        data: material,
      });
    } catch (error) {
      next(error);
    }
  },
  handlerPutBahanBaku: async (req, res, next) => {
    try {
      const id_owner = req.user.id_owner;
      const { type, name, material_category, price, unit, stock } = req.body;
      const { id_material } = req.params;

      await materialService.updateMaterial(id_material, {
        type,
        name,
        material_category,
        price,
        unit,
        stock,
      });
      res.status(200).json({
        status: "Success",
        message: "Successfully update bahan baku",
      });
    } catch (error) {
      next(error);
    }
  },
  handlerDeleteBahanBaku: async (req, res, next) => {
    try {
      const id_owner = req.user.id_owner;
      const { id_material } = req.params;

      await materialService.deleteMaterial(id_material);
      res.status(200).json({
        status: "Success",
        message: "Successfully delete Bahan",
      });

    } catch (error) {
      next(error);
    }
  },
};
