const express = require('express');
const router = express.Router();

const framSizeConfroller = require('../../controllers/ImageSizesController/ImageSizesController');

router.post('/get-frame-sizes',framSizeConfroller.getFrameSizes );

module.exports = router;