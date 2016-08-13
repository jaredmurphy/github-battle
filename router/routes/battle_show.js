const express = require('express');
const router = express.Router();
const db = require('../../db/db');

router.get('/', db.show_battle, function (req, res) {
  if(res.error){
    req.flash('error', res.error);
  } else {
    console.log('succcess')
  }
});
module.exports = router;
