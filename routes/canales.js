const express = require('express');
const router = express.Router();
const canales = require('../data/canales.json');

router.get('/', (req, res) => {
  res.render('index', { canales });
});

module.exports = router;
