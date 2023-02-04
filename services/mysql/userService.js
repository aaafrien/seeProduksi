const { User, Role } = require("../../models");

const userService = { 
    createOwner: async (user) => {
        const newUser = await User.create(user);
        return {
            id: newUser.id,
            email: newUser.email,
            fullName: newUser.fullName,
            phoneNumber: newUser.phoneNumber,
            role: newUser.role,   
        }
    },
    addAdmin: async (user) => {
        const getAdmin = await User.findOne({
            where: {
                email: user.email,
            }
        });
        if (getAdmin) {
            throw new Error("Email has been registered");
        }
        console.log(user.id_owner);
        const newAdmin = await User.create(user);
        return {
            id: newAdmin.id,
            email: newAdmin.email,
            fullName: newAdmin.fullName,
            phoneNumber: newAdmin.phoneNumber,
            role: newAdmin.role,   
            id_owner: newAdmin.id_owner,
        }
    },
    getUserLogin: async (email) => {
        const user = await User.findOne({
            where: {
                email: email,
            },
            include: [{model:Role, attributes: ["id", 'roleName']}]
        });
        if (!user) {
            throw new Error("Account not found or wrong Password");
        }
        return user;
    },
    getAllAdmin: async (id_owner) => {
        const user = await User.findAll({
            where: {
                id_owner
            }
        });
        return user;
    }    
}

module.exports = userService;