var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request({
    uri: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
  }).pipe(res);
});

module.exports = router;

