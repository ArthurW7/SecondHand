var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index');
});

router.get('/cadastro', function(req, res, next){
  res.render('home/cadastro/cadastro');
});

router.get('', function(req, res, next){
  res.render('');
});

module.exports = router;
