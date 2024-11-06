const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  total_price: Number,
  image_url: String,
  status: String,
  productId: String,
  quantity: Number,
  totalAmount: Number,
  stripePaymentId: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Order', orderSchema);