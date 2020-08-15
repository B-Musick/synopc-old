var express = require('express'),
    router = express.Router();
    // passport = require('passport')
    // User = require('../models/user')
// middleware = require('../middleware');

// LANDING PAGE
router.get('/', (req, res) => { res.render('landing'); });

module.exports = router;