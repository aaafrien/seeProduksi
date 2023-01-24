const { Produk, Produk_Bahan, Bahan_Baku, sequelize } = require("../../models");

module.exports = {
  handlerAddProduk: async (req, res, next) => {
    const id_owner = req.user.id_owner;
    const t = await sequelize.transaction();
    try {
      const dataBahan = [];
      const { kode_produk, nama_produk, kategori, harga_produk, bahan } =
        req.body;

      const produk = await Produk.findOne({
        where: {
          kode_produk: kode_produk,
          id_owner,
        },
      });
      if (produk) {
        throw new Error("Kode Produk already in use");
      }
      const addProduk = await Produk.create(
        {
          kode_produk,
          nama_produk,
          kategori,
          harga_produk,
          id_owner,
        },
        { transaction: t }
      );

      for (const bahanBaku of bahan) {
        const checkBahan = await Bahan_Baku.findOne({
          where: {
            kode: bahanBaku.kode_bahan,
            id_owner,
          }
        });
        if (!checkBahan) {
          throw new Error("Bahan not found");
        }
        await Produk_Bahan.create(
          {
            kode_produk,
            kode_bahan: bahanBaku.kode_bahan,
            jumlah_bahan: bahanBaku.jumlah_bahan,
            id_owner,
          },
          { transaction: t }
        ).then((dataBahanBaku) => {
          dataBahan.push(dataBahanBaku);
        });
      }
      await t.commit();

      res.status(201).json({
        status: "Sucess",
        message: "Successfully add Produk",
        data: { produk: addProduk, bahan: dataBahan },
      });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  },

  handlerGetAllProduk: async (req, res, next) => {
    try {
      const id_owner = req.user.id_owner;
      const produk = await Produk.findAll({
        where: {
          id_owner,
        },
        include: [
          {
            model: Bahan_Baku,
            as: "Bahan",
            attributes: [
              "kode",
              "nama",
              "jenis",
              "kategori_bahan",
              "harga",
              "satuan",
            ],
            through: {
              as: "Jumlah_bahan",
              attributes: ["id", "jumlah_bahan"],
            },
          },
        ],
      });
      const json = produk.map((item) => {
        return item.toJSON();
      });

      const hasil = json.map((item) => {
        item.Bahan = item.Bahan.map((data) => {
          return {
            kode_bahan: data.kode,
            nama: data.nama,
            jenis: data.jenis,
            kategori_bahan: data.kategori_bahan,
            harga: data.harga,
            satuan: data.satuan,
            jumlah: data.Jumlah_bahan.jumlah_bahan,
          };
        });
        return item;
      });
      res.status(200).json({
        status: "Success",
        message: "Successfully get All Produk",
        data: hasil,
      });
    } catch (error) {
      next(error);
    }
  },

  handlerDeleteProduk: async (req, res, next) => {
    try {
      const id_owner = req.user.id_owner;
      const { kode_produk } = req.params;

      const produk = await Produk.findOne({
        where: {
          kode_produk: kode_produk,
          id_owner,
        },
        through: {
          model: Produk_Bahan,
        },
      });
      if (!produk) {
        throw new Error("Produk not found");
      }

      await produk.destroy();

      res.status(200).json({
        status: "Success",
        message: "Successfully delete produk",
      });
    } catch (error) {
      next(error);
    }
  },

  handlerPutProduk: async (req, res, next) => {
    try {
      const id_owner = req.user.id_owner;
      const { kode_produk } = req.params;
      const { nama_produk, kategori, harga_produk } = req.body;
      const produk = await Produk.findOne({
        where: {
          kode_produk,
          id_owner,
        },
      }).then(async (data) => {
        if (!data) {
          throw new Error("Produk not found");
        }
        data.set({
          nama_produk,
          kategori,
          harga_produk,
        });
        await data.save();
      });

      res.status(201).json({
        status: "Success",
        message: "Successfully update Produk",
      });
    } catch (error) {
      next(error);
    }
  },

  handlerPutProdukBahan: async (req, res, next) => {
    const { kode_produk, kode_bahan } = req.params;
    const { jumlah_bahan } = req.body;
    try {
      const bahan = await Produk_Bahan.findOne({
        where: {
          kode_produk: kode_produk,
          kode_bahan: kode_bahan,
        },
      });
      if (!bahan) {
        throw new Error("Bahan from Produk not found");
      }
      bahan.set({
        jumlah_bahan,
      });
      await bahan.save();
      res.status(201).json({
        status: "Success",
        message: "Successfully update Bahan in Produk",
      });
    } catch (error) {
      next(error);
    }
  },

  handlerAddBahanInProduk: async (req, res, next) => {
    try {
      const id_owner = req.user.id_owner;
      const t = await sequelize.transaction();
      const { kode_produk } = req.params;
      const dataBahan = [];
      //const { kode_bahan, jumlah_bahan } = req.body;
      const { bahan } = req.body;
      const produk = await Produk.findOne({
        where: {
          kode_produk,
          id_owner,
        },
      });
      if (!produk) {
        throw new Error("Produk not found");
      }

      for (const bahanBaku of bahan) {
        await Produk_Bahan.create(
          {
            kode_produk,
            kode_bahan: bahanBaku.kode_bahan,
            jumlah_bahan: bahanBaku.jumlah_bahan,
          },
          { transaction: t }
        ).then((dataBahanBaku) => {
          dataBahan.push(dataBahanBaku);
        });
      }
      await t.commit();

      res.status(201).json({
        status: "Success",
        message: "Successfully add Bahan in Produk",
        data: dataBahan,
      });
    } catch (error) {
      next(error);
    }
  },

  handlerDeleteBahanInProduk: async (req, res, next) => {
    try {
      const id_owner = req.user.id_owner;
      const { kode_produk, kode_bahan } = req.params;
      const bahanProduk = await Produk_Bahan.findOne({
        where: {
          kode_bahan,
          kode_produk,
        },
      });
      if (!bahanProduk) {
        throw new Error("Bahan not found");
      }
      await bahanProduk.destroy();
      res.status(201).json({
        status: "Success",
        message: "Successfully delete bahan in produk",
      });
    } catch (error) {
      next(error);
    }
  },
};
