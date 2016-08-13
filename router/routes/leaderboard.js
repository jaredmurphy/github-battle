const express = require('express');
const router = express.Router();
const db = require('../../db/db');

router.get('/', db.leaderboard, function (req, res) {
  // console.log("req", req)
  console.log('users', res.users)
  if(res.error){
    req.flash('error', res.error);
  } else {
    var data = {
      users: res.users
    }
    res.render('./app/leaderboard', data);
  }
});

module.exports = router;
