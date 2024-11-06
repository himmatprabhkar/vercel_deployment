const express = require('express');
const router = express.Router();
const authenticateToken =  require('../../middlewares/AuthMiddleware/authMiddleware');
const userController = require('../../controllers/UserController/UserController');

router.get('/user', authenticateToken, userController.getUserDetails )

module.exports = router;
