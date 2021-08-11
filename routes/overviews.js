var express = require('express');
var router = express.Router();
path = require('path')


/* GET home page. */
router.get('/AICU_1_to_16', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public/html/AICU_1_to_16.html'));
});

module.exports = router;
