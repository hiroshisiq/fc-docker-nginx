var express = require('express');
var getPeople = require('../repository/people');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const content = {
    title: 'Full Cycle Rocks!', 
    people: getPeople()
  }

  res.render('index', content);
});

module.exports = router;
