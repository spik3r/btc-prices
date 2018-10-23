require('es6-promise').polyfill();
require('isomorphic-fetch');

const express = require('express');
const router = express.Router();

const cls = require('continuation-local-storage');
const namespace = cls.createNamespace('foobar');


router.get('/', async function(req, res){
    // console.table(req.headers);
    saveHeadar("req.headers");
    return res.send("Saved!");
});

router.get('/list', async function(req, res){
        let hedar = getHeadar('name');
        return res.send("... retrieved! " + hedar);
});

function saveHeadar(headars) {
    namespace.run(function () {
        console.table(headars);
        console.log("before save headars: " + headars);
        namespace.set('name', headars);
        console.log("after save headars: " + namespace.get('name'));
    });
}

function getHeadar(headarName) {
    namespace.run(function () {
        let hedar = namespace.get(headarName);
        console.log("after save headars: " + hedar);
        return hedar;
    });

}



module.exports = router;