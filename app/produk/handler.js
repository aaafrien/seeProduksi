const { Produk, Produk_Bahan, Bahan_Baku, sequelize } = require("../../models");

module.exports = {
  handlerAddProduk: async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
      const dataBahan = [];
      const { kode_produk, nama_produk, kategori, harga_produk, bahan } =
        req.body;
      const [produk, check] = await Produk.findOrCreate({
        where: {
          kode_produk: kode_produk,
        },
        defaults: {
          kode_produk,
          nama_produk,
          kategori,
          harga_produk,
        },
      });
      if (check) {
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
          status: "Sucess",
          message: "Successfully add Produk",
          data: {
            produk: { produk, bahan: dataBahan },
          },
        });
      } else {
        throw new Error("Kode Produk has been used");
      }
    } catch (error) {
      await t.rollback();
      next(error);
    }
  },
  handlerGetAllProduk: async (req, res, next) => {
    try {
      const { kode_produk } = req.params;
    //   const produk = await Produk.findAll(
    //     {
    //       include: [
    //         {
    //           model: Bahan_Baku,
    //           as: "Bahans",
    //           attributes: ["nama","jenis", "kategori_bahan", "harga","satuan"],
    //           through: {
    //             attributes: ["jumlah_bahan"],
    //           },
    //         },
    //       ],
    //     }
    //   );
      const produk = await Produk.findByPk(kode_produk,
        {
          include: [
            {
              model: Bahan_Baku,
              as: "Bahans",
              attributes: ["nama","jenis", "kategori_bahan", "harga","satuan"],
              through: {
                attributes: ["jumlah_bahan"],
              },
            },
          ],
        }
      );
      res.status(200).json({
        data: produk,
      });
    } catch (error) {
      next(error);
    }
  },
};
