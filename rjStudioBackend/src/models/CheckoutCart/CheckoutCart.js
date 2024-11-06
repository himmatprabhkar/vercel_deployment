const mongoose = require('mongoose');

const checkoutCartSchema = new mongoose.Schema({
  cart_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }
});

module.exports = mongoose.model('Checkout', checkoutCartSchema);
