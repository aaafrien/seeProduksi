const bcrypt = require("bcrypt");
const { Owner, Admin } = require("../../models");
const generateAccessToken = require("../../utils/tokenManager");

module.exports = {
  handlerLoginAdmin: async (req, res, next) => {
    try {
      const { email_admin, password_admin } = req.body;
      const admin = await Admin.findOne({
        where: {
          email_admin,
        },
      });

      if (!admin) {
        throw new Error("Account not found or wrong Password");
      }
      const passwordValidate = await bcrypt.compareSync(
        password_admin,
        admin.password_admin
      );
      if (!passwordValidate) {
        throw new Error("Account not found or wrong Password");
      }

      const accessToken = generateAccessToken({
        email: admin.email_admin,
        nama: admin.name_admin,
        role: "admin",
      });
      res.status(201).json({
        status: "Success",
        message: "Successfully login admin",
        data: {
            email: admin.email_admin,
            name: admin.name_admin,
            role: "admin",
            accessToken,
        },
      });
    } catch (error) {
      next(error);
    }
  },
};
