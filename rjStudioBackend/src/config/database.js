const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/rjstudio';

const mongoURID = 'mongodb+srv://himmatprabhkar:OwFV7XCNjHxjZWbL@cluster0.mhhn0ev.mongodb.net/';

const mongoURIDB = 'mongodb+srv://himmatprabhkar:OwFV7XCNjHxjZWbL@cluster0.mhhn0ev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(mongoURID, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err.message));

module.exports = mongoose.connection;