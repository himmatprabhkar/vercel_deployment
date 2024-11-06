const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController/authController');
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const authenticateToken = require('../../middlewares/AuthMiddleware/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/upload-image', upload.single('image'), authController.uploadFile); // Upload to S3
router.post("/create-checkout-session", authenticateToken, authController.makePaymaneMethod);

module.exports = router;
