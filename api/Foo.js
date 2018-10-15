const express = require('express')
const router = express.Router()

const foo = {
    id: 123,
    name: "bar",
    type: "baz",
};


router.get('/hello', function(req, res){
    res.json(foo);
});

module.exports = router;
