var express = require('express');
var getPeople = require('../repository/people');

var router = express.Router();

/* GET people listing. */
router.get('/', function(req, res, next) {
  res.send(getPeople());
});

/* POST people listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
