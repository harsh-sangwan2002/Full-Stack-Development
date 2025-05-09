const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const verifiedUser = await jwt.verify(token, process.env.JWT_SECRET);
        console.log(verifiedUser);
        req.userId = verifiedUser.userId;
        next();

    } catch (err) {
        res.status(500).json({
            message: "Cannot verify token",
            err
        })
    }
}

module.exports = authMiddleware;