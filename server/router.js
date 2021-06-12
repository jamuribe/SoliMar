const express = require('express');
const { Router } = express;
const router = Router();
const  getData = require('./controllers/controllers');

router.get('/', getData)

module.exports = router;
