const transactionService = require("../../services/mysql/transactionService");

module.exports = {
  handlerGetAllTransaction: async (req, res, next) => {
    try {
      const transaction = await transactionService.getAllTransaction(
        req.user.id_owner
      );

      res.status(200).json({
        status: "success",
        message: "Successfully get Transaction",
        data: transaction,
      });
    } catch (error) {
      next(error);
    }
  },
  handlerAddTransaction: async (req, res, next) => {
    try {
      const { id_product, quantity } = req.body;
      const addTransaction = await transactionService.addTransaction({
        id: id_product,
        id_user: req.user.id,
        id_owner: req.user.id_owner,
        quantity: quantity,
      });

      res.status(201).json({
        status: "success",
        message: "Successfully add Transaction",
        data: addTransaction,
      });
    } catch (error) {
      next(error);
    }
  },
};
