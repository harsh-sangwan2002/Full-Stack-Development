const express = require('express');
const router = express.Router();

const {login,test} = require('../controllers/login.controller');

router.get('/:id',login);
router.get('/:val',test);

module.exports = router;