require('es6-promise').polyfill();
require('isomorphic-fetch');

const express = require('express');
const router = express.Router();

const db = require('../server/database');
// var incoming = null;
db.loadDatabase({}, function () {
    console.log("loaded db");
});
var outgoing = db.getCollection('outgoing');
var incoming = db.getCollection('incoming');

router.get('/', async function(req, res){
    // console.table(req.headers);
    incoming.insert({correlationId : "abc123", header: 'header-foo'});
    incoming.insert({correlationId : "qwerty666", header: 'header-bar'});
    outgoing.insert({correlationId : "argh9876", header: 'aaa bbbb ccccc'});
    db.saveDatabase();

    return res.send("loki saved");
});

router.get('/list', async function(req, res){
        var hdr = incoming.find({correlationId: "abc123"});
        var a = hdr[0];
        var b = JSON.stringify(hdr[0]);
        console.log("count: " + incoming.count());
        console.log('a: ' + a);
        console.log('hdr: ' + b);
        return res.send("... retrieved! " +a['header']);
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