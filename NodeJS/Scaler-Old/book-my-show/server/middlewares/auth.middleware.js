const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("auth Middleware", verifyToken);
        next();
    } catch (err) {
        console.log(err);
    }
}