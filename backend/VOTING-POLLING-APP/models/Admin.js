const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('Admin', adminSchema);
const Admin = require('./Admin');
const Contestant = require('./Contestant');

// Authenticate admin
const admin = await Admin.findOne({ username, password });

// Add a contestant
await Contestant.create({ name, description, photo_path });
