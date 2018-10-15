const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_DEV !== 'production' //true false
const app = next({ dev })
const handle = app.getRequestHandler() //part of next config
// const router = express.Router()
var foo = require("../api/foo.js")
var Person = require("../api/Person")

app.prepare().then(() => {
    // express code here

    const server = express()
    server.get('/asd', function (req, res) {
        res.send('Hello World!');
    });

    server.get('/api/person', (req, res) => {
        res.send(Person());
    });

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('*', (req,res) => {
        return handle(req,res) // for all the react stuff
    })
    server.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`)
    })
})
