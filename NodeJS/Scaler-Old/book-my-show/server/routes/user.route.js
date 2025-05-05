const router = require('express').Router();
const { registerUser, loginUser } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', authMiddleware, registerUser)
    .post('/login', loginUser)

module.exports = router;