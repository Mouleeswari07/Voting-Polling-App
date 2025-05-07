const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  participants: [
    {
      name: String,
      photo: String,
      votes: { type: Number, default: 0 },
    }
  ]
});

module.exports = mongoose.model('Contest', contestSchema);
