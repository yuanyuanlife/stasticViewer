var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '百度统计自定义变量查看器' });
});

module.exports = router;
