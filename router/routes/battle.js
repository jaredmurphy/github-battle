const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
   res.render('battle/new');
});

module.exports = router;
