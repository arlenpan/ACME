var express = require('express');
var router = express.Router();

/* GET specific list page. */
router.get('/', function(req, res, next) {
    res.render('list', { title: 'Express' });
});

module.exports = router;
