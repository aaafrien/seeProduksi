const bcrypt = require("bcrypt");
const { User } = require("../../models");
const userService = require("../../services/mysql/userService");
const generateAccessToken = require("../../utils/tokenManager");

module.exports = {
  handlerRegisterOwner: async (req, res, next) => {
    try {
      const { email, fullName, phoneNumber, password } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      // const owner = await User.create({
      //   email,
      //   name,
      //   hp,
      //   password: hashPassword,
      // });
      const owner = await userService.createOwner({
        email,
        fullName,
        phoneNumber,
        password: hashPassword,
        role: 1,
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
      const { email, name, password, role } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      // const admin = await User.create({
      //   email,
      //   name,
      //   password: hashPassword,
      //   id_owner: owner.id,
      //   role,
      // });
      const admin = await userService.addAdmin({
        email,
        fullName,
        phoneNumber,
        role,
        password: hashPassword,
        id_owner: req.user.id,
      });
      res.status(201).json({
        status: "Success",
        message: "Successfully add Admin",
        data: {
          admin: {
            name: admin.name,
            email: admin.email,
            role: admin.role,
          },
        },
      });
    } catch (error) {
      next(error);
    }
  },
  handlerLoginUser: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      let id_owner;
      // const user = await User.findOne({
      //   where: {
      //     email: email,
      //   },
      // });
      // if (!user) {
      //   throw new Error("Account not found or wrong Password");
      // }
      const user = await userService.getUserLogin(email);
      const passwordValidate = await bcrypt.compareSync(
        password,
        user.password
      );
      if (!passwordValidate) {
        throw new Error("Account not found or wrong Password");
      }
      if (!user.id_owner) {
        id_owner = user.id;
      } else {
        id_owner = user.id_owner;
      }
      const accessToken = generateAccessToken({
        email: user.email,
        nama: user.name,
        role: user.Role.roleName,
        id_owner: id_owner,
      });

      res.status(200).json({
        status: "Success",
        message: "Successfully login",
        data: {
          email: user.email,
          name: user.name,
          role: user.Role.roleName,
          id_owner,
          accessToken,
          
        },
      });
    } catch (error) {
      next(error);
    }
  },
  handlerGetAdmin: async (req, res, next) => {
    try {
      const admin = await userService.getAllAdmin(req.user.id);
      res.status(200).json({
        status: "success",
        message: "Successfully get All Admin",
        data: admin,
      });
    } catch (error) {
      next(error);
    }
  },
};
