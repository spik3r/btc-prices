require('es6-promise').polyfill();
require('isomorphic-fetch');

const express = require('express');
const router = express.Router();

var createNamespace = require('continuation-local-storage').createNamespace;
var namespace = createNamespace('my session');


const db = require('../server/database');
var incoming = null;
db.loadDatabase({}, function () {
    console.log("loaded db");
});
    incoming = db.getCollection('incoming');
    outgoing = db.getCollection('outgoing');

router.get('/', async function(req, res){
    // console.table(req.headers);
    saveHeadar("req.headers");
    return res.send("Saved!");
});

router.get('/list', async function(req, res){
        let hedar = getHeadar('name');
        return res.send("... retrieved! " + hedar);
});

router.get('/fromloki', async function(req, res){

    var hdr = incoming.find({correlationId: "qwerty666"});
    var hdr2 = outgoing.find({correlationId: "argh9876"});
    var rawObject = hdr[0];
    var rawObject2 = hdr2[0];
    var jsonString = JSON.stringify(rawObject);
    var jsonString2 = JSON.stringify(rawObject2);
    console.log('hdr: ' + jsonString);
    console.log('hdr2: ' + jsonString2);
    return res.send("... retrieved! " +rawObject['header']);
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
    var getNamespace = require('continuation-local-storage').getNamespace;
    var session = getNamespace('my session');
    session.run(function () {
        let hedar = namespace.get(headarName);
        console.log("after save headars: " + hedar);
        return hedar;
    });

}



module.exports = router;