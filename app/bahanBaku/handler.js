const { Bahan_Baku } = require("../../models");
const materialService = require("../../services/mysql/materialService");

module.exports = {
  handlerGetBahanBaku: async (req, res, next) => {
    try {
      // const id_owner = req.user.id_owner;
      // const bahan = await Bahan_Baku.findAll({
      //   where: {
      //     id_owner,
      //   },
      // });
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
      const id_owner = req.user.id_owner;
      const { code, name, type, material_category, price, unit, stock } =
        req.body;

      const material = await materialService.addMaterial(req.user.id_owner, {
        code,
        name,
        type,
        material_category,
        price,
        unit,
        stock,
      });
      res.status(201).json({
        status: "Success",
        message: "Successfully add Material",
        data: material,
      });
      // const [bahanBaku, check] = await Bahan_Baku.findOrCreate({
      //   where: {
      //     kode: kode,
      //     id_owner,
      //   },
      //   defaults: {
      //     kode,
      //     nama,
      //     jenis,
      //     kategori_bahan,
      //     harga,
      //     satuan,
      //     stok,
      //     id_owner,
      //   },
      // });
      // if (check) {
      //   res.status(201).json({
      //     status: "Success",
      //     message: "Successfully add bahan baku",
      //     data: bahanBaku,
      //   });
      // } else {
      //   throw new Error("Kode has been used");
      // }
    } catch (error) {
      next(error);
    }
  },
  handlerPutBahanBaku: async (req, res, next) => {
    try {
      const id_owner = req.user.id_owner;
      const { type, name, material_category, price, unit, stock } = req.body;
      const { id_material } = req.params;
      //   const tes = await Bahan_Baku.findOne({
      //     where:{
      //         kode: `${kode}`,
      //     }
      //   });
      //   if(!tes) {
      //     throw new Error("Bahan Not found");
      //   }
      // await Bahan_Baku.findOne({
      //   where: {
      //     kode: kode,
      //     id_owner,
      //   },
      // })
      //   .then(async (data) => {
      //     if (!data) {
      //       throw new Error("Bahan not found");
      //     }
      //     data.set({
      //       jenis,
      //       nama,
      //       kategori_bahan,
      //       harga,
      //       satuan,
      //       stok,
      //     });
      //     await data.save();
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
      // await Bahan_Baku.findOne({
      //   where: {
      //     kode: kode,
      //     id_owner,
      //   },
      // })
      //   .then(async (data) => {
      //     if (!data) {
      //       throw new Error("Bahan not found");
      //     }
      //     await data.destroy();
      //     res.status(200).json({
      //       status: "Success",
      //       message: "Successfully delete Bahan",
      //     });
      //   })
    } catch (error) {
      next(error);
    }
  },
};
