const mongoose = require('mongoose');

// Schema for individual sizes
const sizeSchema = new mongoose.Schema({
  sizeName: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
});

// Schema for the ratio (format) with its corresponding sizes
const ratioSchema = new mongoose.Schema({
  format: { type: String, required: true },
  sizes: [sizeSchema],  // Array of sizes for the format
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Export the model
module.exports = mongoose.model('frameSizeRatioLandscape', ratioSchema);
