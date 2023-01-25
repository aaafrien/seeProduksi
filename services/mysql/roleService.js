const { Role, User } = require("../../models");

const roleService = {
  getAllRole: async () => {
    const roles = await Role.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      offset: 1,
    });
    return roles;
  },
  getRole: async (id) => {
    const role = await Role.findByPk(id);
    if (!role) {
        throw new Error("Role not found");
    }
    return role;
  },
  addRole: async (roleName) => {
    const createRole = await Role.create(roleName);
    return createRole;
  },
  updateRole: async (id, role) => {
    const getRole = await Role.findByPk(id);
    if (!getRole) {
        throw new Error("Role not found");
    }
    await getRole.update(role);
    return getRole;
  },
  deleteRole: async (id) => {
    const role = await this.getRole(id);
    const { count, rows } = await User.findAndCountAll({
        where: {
            role: id,
        }
    });
    if (count !== 0) {
        throw new Error(`${count} User are used this role`);
    }
    await role.destroy();
    return role;
  }

};

module.exports = roleService;