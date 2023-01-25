const { Material } = require("../../models");

const materialService = {
    getAllMaterial: async (id_owner) => {
        const materials = await Material.findAll({
            where: {
                id_owner
            }
        });
        return materials;
    },
    getMaterial: async (id) => {
        const material = await Material.findByPk(id);
        if (!material) {
            throw new Error("Material not found");
        }
        return material;
    },
    addMaterial: async (id_owner, material) => {
        const checkMaterial = await Material.findOne({
            where: {
                code: material.code,
                id_owner,
            }
        });
        if (checkMaterial) {
            throw new Error("Code has been used");
        }
        const createMaterial = await Material.create(material);
        return createMaterial;
    },
    updateMaterial: async (id_material, material) => {
        const updateMaterial = await this.getMaterial(id_material);
        await updateMaterial.update(material);
        return updateMaterial;
    },
    deleteMaterial: async (id_material) => {
        const deleteMaterial = this.getMaterial(id_material);
        await deleteMaterial.destroy();
        return deleteMaterial;
    }
}

module.exports = materialService;