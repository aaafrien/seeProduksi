const bcrypt = require("bcrypt");
const userService = require("../../services/mysql/userService");
const generateAccessToken = require("../../utils/tokenManager");

module.exports = {
  handlerRegisterOwner: async (req, res, next) => {
    try {
      const { email, fullName, phoneNumber, password } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);

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
      const { email, fullName, password, role, phoneNumber } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      console.log(owner);
      const admin = await userService.addAdmin({
        email,
        fullName,
        phoneNumber,
        role,
        password: hashPassword,
        id_owner: owner.id,
      });
      res.status(201).json({
        status: "Success",
        message: "Successfully add Admin",
        data: {
          name: admin.fullName,
          email: admin.email,
          role: admin.role,
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
      console.log(user.id);
      const accessToken = generateAccessToken({
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.Role.roleName,
        id_owner: id_owner,
      });

      res.status(200).json({
        status: "Success",
        message: "Successfully login",
        data: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
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
