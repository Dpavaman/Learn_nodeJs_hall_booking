var express = require('express');
var router = express.Router();
var{customer} = require("../info/data")
/* GET home page. */
router.get('/', function(req, res) {
  res.send(customer);
});

module.exports = router;
