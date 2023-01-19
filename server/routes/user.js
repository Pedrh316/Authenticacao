const router = require('express').Router();
const {verifyToken, register, login} = require('../controllers/user');

router.post('/token', verifyToken);
router.post('/register', register);
router.post('/login', login);

module.exports = router