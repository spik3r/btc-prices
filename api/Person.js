const express = require('express')
const router = express.Router()

var data = [{id:1, name: "one"},{id: 2, name: "two"}];
module.exports = function(){
    return data;
};

router.get('/', function(req, res){
    res.send('GET route on things.');
});

module.exports = router;
