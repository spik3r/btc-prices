const express = require('express');
const router = express.Router();

var data = [{id:1, name: "one"},
    {id: 2, name: "two"}];

router.get('/data', function(req, res){
    res.json(data);
});

router.get('/hello', function(req, res){
    res.send("Hello World!");
});

router.get('/render', function(req, res){
    res.render('testview');
});

router.get('/', function(req, res){
    res.send("Some Person...");
});

router.get('/dynamic_view/:sum1/:sum2', function(req, res){
    res.render('content', {
        sum1: req.params.sum1,
        sum2: req.params.sum2,
        total: (req.params.sum1 + req.params.sum2)
    });
});

module.exports = router;
