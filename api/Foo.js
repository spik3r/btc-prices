const express = require('express');
const router = express.Router();

const data = [
    {id: 1,
    name: "foo",
    type: "foo",},
    {id: 2,
     name: "bar",
     type: "bar",},
    {id: 3,
     name: "baz",
     type: "baz"},
     ];

const foo = {
    id: 123,
    name: "bar",
    type: "baz",
};


router.get('/', function(req, res){
    LOG.info("foo called");
    res.json(foo);
});

router.get('/data', function(req, res){
    var requestId = req.query.id;
    LOG.info(`/foo/data called with id: ${requestId}`);
    res.json(getFooById(data, requestId));
});

router.get('/data/all', function(req, res){
    res.json(data);
});

function getFooById(data, requestId) {
    return data.filter(
        function(data){ return data.id == requestId }
    );
}

module.exports = router;
