const mongoose = require('mongoose');

mongoose.connect(import.meta.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/301_catching');




module.exports = mongoose.connection;
