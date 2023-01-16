function loginOwner(req, res, next) {
    if (req.user.role.toLowerCase() !== "owner") {
        res.status(403).json({
          status: "error",
          message: "You are not Owner",
        });
    }
    next();
}

module.exports = loginOwner;