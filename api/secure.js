const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();


router.get('/api', (req, res) => {
    LOG.info("request headers: " + JSON.stringify(req.headers));
    console.log(JSON.stringify(req.headers));
    res.json({
        message: 'Welcome to the API',
        info: 'send a request to http://localhost:3000/api/secure/login',
        moreInfo: 'then use that token to call http://localhost:3000/api/secure/posts'
    });
});

router.post('/posts', verifyToken, (req, res) => {
    LOG.info("request headers: " + JSON.stringify(req.headers));
    console.log(JSON.stringify(req.headers));
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post created...',
                authData
            });
        }
    });
});

router.post('/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'kai',
        email: 'kai@example.com'
    }

    jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
        res.json({
            token
        });
    });
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }

}

module.exports = router;
