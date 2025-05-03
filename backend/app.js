const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
require('./models/db');

// Routes
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false
}));

// View engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Use Routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

// Start Server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
require('./models/db');

require('./models/db');
app.use(express.static('public'));
require('dotenv').config();
