const express = require('express');
const router = express.Router();

//Register
router.post('/register', (req, res, next) => {
    res.send("REGISTER")
});

//Authenticate
router.get('/authenticate', (req, res, next) => {
    res.send("AUTHENTICATE")
});

//Profile
router.get('/profile', (req, res, next) => {
    res.send("PROFILE")
});

//Register
router.get('/register', (req, res, next) => {
    res.send("REGISTER")
});

module.exports = router;