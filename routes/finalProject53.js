var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Final Project' ,name:'zac',id:'204410053'});
});

module.exports = router;
