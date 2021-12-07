const express = require('express');
const router = express.Router();
const {getPdf} = require('../actions/pdf');

router.get('/pdf', getPdf);

module.exports = router;