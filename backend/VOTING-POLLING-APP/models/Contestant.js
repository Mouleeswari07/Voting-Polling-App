const mongoose = require('mongoose');

const contestantSchema = new mongoose.Schema({
  name: String,
  description: String,
  photo_path: String,
  votes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Contestant', contestantSchema);
