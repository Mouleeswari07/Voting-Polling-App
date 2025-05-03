const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route: POST /login (user login using roll number)
router.post('/login', async (req, res) => {
  const { roll_no } = req.body;

  try {
    let user = await User.findOne({ roll_no });
    if (!user) {
      user = await User.create({ roll_no });
    }

    // Store user session here if needed
    req.session.user = user;

    res.redirect('/user/vote'); // or render vote page
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
