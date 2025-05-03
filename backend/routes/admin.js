const express = require('express');
const router = express.Router();
const Contestant = require('../models/Contestant');
const multer = require('multer');
const path = require('path');

// 🔧 Set up multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// 👨‍💼 GET form to add contestant
router.get('/add-contestant', (req, res) => {
  res.render('admin/add-contestant');
});

// 🧾 POST new contestant data
router.post('/add-contestant', upload.single('photo'), async (req, res) => {
  const { name, description } = req.body;
  const photo_path = '/uploads/' + req.file.filename;

  try {
    await Contestant.create({ name, description, photo_path });
    res.redirect('/admin/dashboard'); // or re-render form with success msg
  } catch (error) {
    console.error('Error adding contestant:', error);
    res.status(500).send('Error adding contestant.');
  }
});

module.exports = router;
