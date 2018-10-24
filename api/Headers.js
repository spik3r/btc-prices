require('es6-promise').polyfill();
require('isomorphic-fetch');

const express = require('express');
const router = express.Router();

router.get('/', async function(req, res){
    printHeaders(req.headers);
    const z =  await superFetch(req.headers);
    return res.send("Done!");
});

router.get('/asdf', function(req, res){
    console.log("________");
    LOG.info("/api/headers/addf called");
    console.table(req.headers);
    console.log("________");

    printHeaders(req.headers);
    console.log("header: " + req.headers['aaaa']);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }));
});

router.get('/juergen', async function(req, res){
    var qwerty = await juergen();
    console.log(qwerty);

});

async function juergen() {
    const res2 = await fetch('http://localhost:3000/checkout');
    return res2;
}

function printHeaders(headers) {
    for (var header in headers) {
            console.log(header + " -> " + headers[header]);
    }
}



function superFetch(requestHeaders) {
    console.log(requestHeaders);

    fetch('http://localhost:3000/api/headers/asdf', {headers: requestHeaders})
        .then(res => res.json())
        .then(resJson => console.log(resJson))
        .catch(err => console.log(err))
}

module.exports = router;
