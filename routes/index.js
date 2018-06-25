var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.sendFile('index', {title: 'Express'});
// });
router.post('/', function (req, res, next) {
  res.send({'хуй':'хуй'});
});

router.post('/api/test/', function (req, res, next) {
  res.send({'хуй':'хуй'}, 200);
});

var myLogger = function (req, res, next) {
  console.log('LOGGED', new Date());
  res.logged = true;
  next();
};

router.use(myLogger);
module.exports = router;
