function ruleBahan(input) {
    const ruleUser = req.user.ruleBahan;
    const rule = ruleUser.split(",");
    for (rules of rule) {
        if (rules === input) {
            next();
        }
    }
    res.status(403).json({
        status: "error",
        message: "You are not allowed",
    });
}

module.exports = ruleBahan;