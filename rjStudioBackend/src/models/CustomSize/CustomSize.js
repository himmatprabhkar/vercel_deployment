const mongoose = require('mongoose');

const customSizeSchema = new mongoose.Schema({
  ImageCustomSize: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CustomSize', customSizeSchema);
