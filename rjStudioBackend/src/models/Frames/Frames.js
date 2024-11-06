const mongoose = require('mongoose');

const FrameSchema = new mongoose.Schema({
  frameName: { type: String, required: true }, 
  frameDescription: { type: String, required: true }, 
  frameWidth: { type: Number, required: true }, 
  frameDepth: { type: Number, required: true }, 
  frameCategory: { type: String, required: true }, 
  frameImage: { type: String, required: true }, 
  sides: {
    sideUp: { type: String, required: true }, 
    sideDown: { type: String, required: true }, 
    sideLeft: { type: String, required: true }, 
    sideRight: { type: String, required: true }, 
    topLeft: { type: String, required: true }, 
    topRight: { type: String, required: true }, 
    bottomLeft: { type: String, required: true }, 
    bottomRight: { type: String, required: true }, 
  },
});

// Grouping by size in inches
const FrameSizeSchema = new mongoose.Schema({
  sizeInInches: { type: String, required: true }, 
  frames: [FrameSchema],
});

const FrameSize = mongoose.model('FrameSize', FrameSizeSchema);

module.exports = FrameSize;
