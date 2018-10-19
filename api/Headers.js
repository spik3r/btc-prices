const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    LOG.info("/api/headers called");
    headerFoo(req.headers);
    res.json("Headers received: " + req.headers['aaa']);
});

function headerFoo(headers) {

    // console.log(headers);

    for (var header in headers) {
            console.log(header + " -> " + headers[header]);
    }
}

module.exports = router;
