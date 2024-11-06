const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  motif_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MotifBorder' },
  frame_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Frames' },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

