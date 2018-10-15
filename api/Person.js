const express = require('express')
const router = express.Router()

var data = [{id:1, name: "one"},{id: 2, name: "two"}];

router.get('/data', function(req, res){
    res.json(data);
});

router.get('/hello', function(req, res){
    res.send("Hello World!");
});

module.exports = router;
