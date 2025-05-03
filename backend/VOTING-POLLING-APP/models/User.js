const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  roll_no: { type: String, unique: true },
  has_voted: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
