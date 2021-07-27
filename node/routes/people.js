var express = require('express');
var router = express.Router();

/* GET people listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST people listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
