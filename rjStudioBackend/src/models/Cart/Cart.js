const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
  image_url: String,
  quantity: Number,
  isCheckout: Boolean,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Cart', cartSchema);
