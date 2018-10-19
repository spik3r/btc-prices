const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_DEV !== 'production' //true false
const app = next({ dev })
const handle = app.getRequestHandler() //part of next config

const Logger = require("log4bro");

const options = {
    productionMode: false, //switches loglevel between DEBUG and WARN
    logDir: "logs", //relative directory to write log file to
    silence: false, //silences logger
    loggerName: "dev", //ignore
    dockerMode: true, //disables output to logfile
    varKey: "LOG" //name of global variable
};



app.prepare().then(() => {

    const logger = new Logger(options);
    // express code here

    const server = express()

    server.set('view engine', 'pug');
    server.set('views','./pages');

    server.get('/admin/health', function (req, res) {
        res.send('{"status":"UP","details":{"diskSpace":{"status":"UP","details":{"total":40045666304,"free":23265771520,"threshold":10485760}},"redis":{"status":"UP","details":{"version":"3.0.7"}},"db":{"status":"UP","details":{"database":"PostgreSQL","hello":1}},"refreshScope":{"status":"UP"},"hystrix":{"status":"UP"}}}');
    });

    server.use('/api/secure', require("../api/secure"));
    server.use('/api/headers', require("../api/Headers"));

    server.use('/api/person', require("../api/Person"));

    server.use('/api/foo', require("../api/Foo"));

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('*', (req,res) => {
        return handle(req,res) // for all the react stuff
    })
    server.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`);
        LOG.info("ready at http://localhost:${PORT}");

        const a = "fooBar";
        LOG.warn(`something ${a} went wrong `)

        const someParam = "any old variable";
        LOG.info(`foo happned with parameter ${someParam}`);
    })
})
