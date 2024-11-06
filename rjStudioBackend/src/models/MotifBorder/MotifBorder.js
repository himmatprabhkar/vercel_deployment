const mongoose = require('mongoose');

const motifBorderSchema = new mongoose.Schema({
  size: {
    type: Number,
    required: true
  },
  sizeName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});


module.exports = mongoose.model('MotifBorders', motifBorderSchema);