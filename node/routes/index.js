var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Full Cycle Rocks!', people: ['Hiroshi', 'Siqueira'] });
});

module.exports = router;
