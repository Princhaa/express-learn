const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE");
        return res.status(200).json({});
    }

    next();
});

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json({ id: 1234 });
})

app.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    //query password = query()    
    if (username == 'aiai' && password == 'aiai') {
        res.json({ token: '123123' });
    } else {
        res.status(401).json({ status: 'error' });
    }
})

app.post('/check-username', function (req, res) {
    var username = req.body.username;
    if (username == 'aiai') {
        res.json({ status: 'available' });
    } else {
        res.status(400).json({ status: 'unavailable' });
    }
})

app.get('/featured-post', function(req, res){
    res.json({ image: 'lalapo' })
})

app.listen(12345, function () {
    console.log('Example app listening on port 12345!')
})