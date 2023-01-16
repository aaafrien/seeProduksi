const bcrypt = require("bcrypt");
const { Owner, Admin } = require("../../models");
const generateAccessToken = require("../../utils/tokenManager");

module.exports = {
  handlerRegisterOwner: async (req, res, next) => {
    try {
      const { email_owner, name_owner, hp_owner, password_owner } = req.body;
      const hashPassword = await bcrypt.hash(password_owner, 10);
      const owner = await Owner.create({
        email_owner,
        name_owner,
        hp_owner,
        password_owner: hashPassword,
      });

      res.status(201).json({
        status: "Success",
        message: "Successfully register owner",
        data: owner,
      });
    } catch (error) {
      next(error);
    }
  }, 
  handlerAddAdmin: async (req, res, next) => {
    try {
      const owner = req.user;
      const { email_admin, name_admin, password_admin, role_admin } = req.body;
      const hashPassword = await bcrypt.hash(password_admin, 10);
      const admin = await Admin.create({
        email_admin, 
        name_admin, 
        password_admin: hashPassword,
        email_owner: owner.email,
        role_admin,
      });
      res.status(201).json({
        status: "Success",
        message: "Successfully add Admin",
        data: {
          admin: {
          name_admin: admin.name_admin,
          email_admin: admin.email_admin,
          role_admin: admin.role_admin,
          }
        }
      });
    } catch (error) {
      next(error);
    }
  },
  handlerLoginOwner: async (req, res, next) => {
    try {
      const { email_owner, password_owner } = req.body;
      const owner = await Owner.findOne({
        where: {
          email_owner: email_owner,
        },
      });
      if (!owner) {
        throw new Error("Account not found or wrong Password");
      }

      const passwordValidate = await bcrypt.compareSync(
        password_owner,
        owner.password_owner
      );
      if (!passwordValidate) {
        throw new Error("Account not found or wrong Password");
      }

      const accessToken = generateAccessToken({
        email: owner.email_owner,
        nama: owner.name_owner,
        role: "owner",
      });
      res.status(201).json({
        status: "Success",
        message: "Successfully login owner",
        data: {
            email: owner.email_owner,
            name: owner.name_owner,
            role: "owner",
            accessToken,
        },
      });
    } catch (error) {
      next(error);
    }
  },

};
