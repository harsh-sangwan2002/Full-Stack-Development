const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        console.log(req.headers);
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Missing or invalid token format" });
        }

        const token = authHeader.split(' ')[1];
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

        console.log(verifiedToken);
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: "Invalid credential" });
    }
};

module.exports = {authMiddleware};
