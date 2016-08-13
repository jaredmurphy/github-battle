const express = require('express');
const router = express.Router();
const db = require('../../db/db');

router.post('/', db.create_battle, function (req, res) {
  console.log(res)
  if(res.error){
    req.flash('error', res.error);
  } else {
    res.send('success');
  }
});
module.exports = router;
