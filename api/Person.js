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

router.get('/dynamic_view/:name/:link', function(req, res){
    res.render('testview', {
        name: req.params.name,
        url: req.params.link
    });
});

module.exports = router;
