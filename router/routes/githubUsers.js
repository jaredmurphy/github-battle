const express = require('express');
const router = express.Router();
const db = require('../../db/db');

router.post('/', db.create_or_update_githubUser, function (req, res) {
  // console.log("req", req)
  // console.log("res", res)
  if(res.error){
    req.flash('error', res.error);
  } else {
    res.send('success');
  }
});

module.exports = router;
