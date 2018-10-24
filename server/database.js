const loki = require('lokijs');
const db = new loki('headers');
var incoming = db.addCollection('incoming');
var outgoing = db.addCollection('outgoing');

incoming.insert({name:'Sleipnir', legs: 8});
incoming.insert({name:'Sleipnir', legs: 11});
incoming.insert({name:'Thor', legs: 2});

outgoing.insert({name:'Odin', legs: 2});
outgoing.insert({name:'Freyja', legs: 2});
outgoing.insert({name:'Freyja', legs: 2});

db.saveDatabase();

module.exports = db;