const jwt = require("jsonwebtoken");
const accessTokenSecretKey = "testing-see-produk";

function authenticationToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        next(new Error("Token not found"));
    }
    
    const token = authHeader.split(" ")[1];
    if (!token) {
        next(new Error("Token is required"));
    }

    const decoded = jwt.verify(token, accessTokenSecretKey);
    const user = {
        id: decoded.id,
        email: decoded.email,
        fullName: decoded.fullName,
        role: decoded.role,
        id_owner: decoded.id_owner,
    };
    req.user = user;

    next();
}

module.exports = authenticationToken;