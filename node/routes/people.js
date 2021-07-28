var express = require('express');
var People = require('../repository/people');

var router = express.Router();

/* GET people listing. */
router.get('/', function(req, res, next) {
  People.findAll(function(err, rows) {
    if (err)
      res.send(err)
    else
      res.send(rows)
  })
});

/* POST people listing. */
router.post('/', function(req, res, next) {
  console.log(req.body.name)
  People.create(req.body.name, (err, insertId) => {
    if (err)
      res.send(err)
    else
      res.send(`Inserted ${req.body.name}`);
  })
  
});

module.exports = router;
