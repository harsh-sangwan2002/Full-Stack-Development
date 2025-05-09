const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {

    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your JWT_SECRET env variable
        req.userId = decoded.userId;
        next();

    } catch (err) {
        res.status(401).json({
            success: false,
            message: "Invalid or expired token",
            error: err.message
        });
    }
}

module.exports = authMiddleware;