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
          data: 
            { produk, bahan: dataBahan },
          
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
      const produk = await Produk.findAll({
        include: [
          {
            model: Bahan_Baku,
            as: "Bahan",
            attributes: ["nama", "jenis", "kategori_bahan", "harga", "satuan"],
            through: {
              as: "Jumlah_bahan",
              attributes: ["jumlah_bahan"],
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
            nama: data.nama,
            jenis: data.jenis,
            kategori_bahan: data.kategori_bahan,
            harga: data.harga,
            satuan: data.satuan,
            jumlah: data.Jumlah_bahan.jumlah_bahan,
          }
        });
        return item;
      });      
      res.status(200).json({
        data: hasil,
      })

      // json.Bahan = json.Bahan.map((item) => {
      //   return {
      //     ...item,
      //     jumlah: item.Jumlah_bahan.jumlah_bahan,
      //   }
      // })
      // }).then((docs) => {
      //   const response = {
      //     data: docs.map((doc) => {
      //       return {
      //         kode_produk: doc.kode_produk,
      //         nama_produk: doc.nama_produk,
      //         kategori: doc.kategori,
      //         harga_produk: doc.harga_produk,
      //         createdAt: doc.createdAt,
      //         updatedAt: doc.updatedAt,
      //         bahan: [
      //           {
      //             nama: doc.Bahan.nama,
      //             jenis: doc.Bahan.jenis,
      //             harga: doc.Bahan.harga,
      //             satuan: doc.Bahan.satuan,
                  
      //           },
      //         ],
      //       };
      //     }),
      //   };
      //   res.status(200).json(response)
      // });
      //   const produk = await Produk.findByPk(kode_produk,
      //     {
      //       include: [
      //         {
      //           model: Bahan_Baku,
      //           as: "Bahan",
      //           attributes: ["nama","jenis", "kategori_bahan", "harga","satuan"],
      //           through: {
      //             as: "Jumlah_bahan",
      //             attributes: ["jumlah_bahan"],
      //           },
      //         },
      //       ],
      //     }
      //   );

      //    produk.Bahan.map((item) => {
      //     if (item.Jumlah_bahan) {
      //         item.Jumlah_bahan = item.Jumlah_bahan.jumlah_bahan;
      //     }
      //     return item;
      //    });

      //  const hasil = produk[0].toJSON();
      //  hasil.Jumlah_bahan = hasil.Jumlah_bahan.map((item)=>{
      //   item.Jumlah_bahan = item.Jumlah_bahan.jumlah_bahan;
      //  });


    } catch (error) {
      next(error);
    }
  },
  handlerDeleteProduk: async (req, res, next) => {
    try {
      const { kode_produk } = req.params;

      const produk = await Produk.findOne({
        where: {
          kode_produk: kode_produk,
        }, through: {
          model: Produk_Bahan,
        }
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
  handlerEditProduk: async (req, res, next) => {
    try {
      const { kode_produk } = req.params;
      const { nama_produk, kategori, harga_produk, bahan } =
      req.body;
      const produk = await Produk.findOne({
        where: {
          kode_produk,
        }
      }).then(async (data) => {
        if (!data) {
          throw new Error("Produk not found");
        }
        data.set({
          nama_produk, kategori, harga_produk, bahan
        });
        await Produk_Bahan.findOne({
          where: {
            kode_produk,
          }
        }).then((bahan) => {
          if (!bahan) {
            throw new Error("Produk not found");
          }
          bahan.set()
        })
      });
      
    } catch (error) {
      next(error);
    }
  }
};
