var express = require('express');
var router = express.Router();
var {rooms, booking, booked} = require("../info/data");

/* GET users listing. */
router.get('/', function(req, res) {
  res.send(rooms);
});

router.get('/booking', function(req, res) {
 res.send(booking);
});

router.get('/status', function(req, res) {
  res.send(booked);
 });

module.exports = router;
