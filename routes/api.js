var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request({
    uri: 'https://jmonterobackend.azurewebsites.net/api',
  }).pipe(res);
});

module.exports = router;