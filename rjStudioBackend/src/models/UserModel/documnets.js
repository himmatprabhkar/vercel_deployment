const mongoose = require('mongoose');

const documentsSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  documents: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model('Documents', documentsSchema);
