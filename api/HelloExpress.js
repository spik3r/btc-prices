var express = require('express')
var router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.get('/api/express', function (req, res) {
    res.send('hello express')
})