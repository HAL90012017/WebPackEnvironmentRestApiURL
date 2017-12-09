// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 4201;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
  
// test route to make sure everything is working (accessed at GET http://localhost:4201/api)
router.get('/qa', function(req, res) {
    res.json({ message: 'I Came From QA Environment, Which is Where You Application Should Be' });   
});

router.get('/dev', function(req, res) {
    res.json({ message: 'I Came From DEV Environment, Which is Where You Application Should Be' });   
});

router.get('/sat', function(req, res) {
    res.json({ message: 'I Came From SAT Environment, Which is Where You Application Should Be' });   
});

router.get('/uat', function(req, res) {
    res.json({ message: 'I Came From UAT Environment, Which is Where You Application Should Be' });   
});

router.get('/prod', function(req, res) {
    res.json({ message: 'I Came From Production Environment, I hope your Code Has Been Tested :)' });   
});
// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);