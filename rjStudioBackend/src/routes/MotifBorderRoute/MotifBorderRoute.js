const express = require('express');
const router = express.Router();

const motifBorderConfroller = require('../../controllers/MotifBorderController/MotifBorderController');

router.get('/get-motif-border-sizes', motifBorderConfroller.getMotifBorderSizes );

module.exports = router;