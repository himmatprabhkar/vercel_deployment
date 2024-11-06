const mongoose = require('mongoose');

const orderCssSchema = new mongoose.Schema({
  Order_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Orders' },
  ImageCustomSize: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});
