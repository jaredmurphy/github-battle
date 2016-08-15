const express = require('express');
const router = express.Router();
const db = require('../../db/db');

router.get('/', db.leaderboard, function (req, res) {
  // console.log("req", req)
  if(res.error){
    req.flash('error', res.error);
  } else {

    var data = {
      wins: res.wins,
      scores: res.scores,
      winners: res.winners,
      losers: res.losers
    }

    res.render('./app/leaderboard', data);
  }
});

module.exports = router;
