const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: String,
  description: String,
  photo: String,
  votes: { type: Number, default: 0 },
});

const contestSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  participants: [participantSchema],
});

module.exports = mongoose.model('Contest', contestSchema);
