var express = require('express');
var People = require('../repository/people');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  People.findAll(function(err, rows) {
    if (err) {
      res.send(err)
      return
    }

    const content = {
      title: 'Full Cycle Rocks!',
      people: rows.map( item => item.name )
    }

    res.render('index', content);
  })
});

module.exports = router;
