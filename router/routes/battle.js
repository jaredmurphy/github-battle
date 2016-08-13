const express = require('express');
const router = express.Router();
const db = require('../../db/db');

router.get('/', function(req, res) {
   res.render('battle/new');
});

router.get('/last/:winner_id/:loser_id', db.last_battle, function (req, res) {
  //console.log('battle req', req.body)
  if(res.error){
  //  req.flash('error', res.error);
  } else {
    //console.log('succcess')
    res.send(JSON.stringify(res.battle));
  }
});


router.get('/:id', db.show_battle, function (req, res) {
  //console.log(res.battle.id)
  if(res.error){
    req.flash('error', res.error);
  } else {
    //console.log('succcess')
    res.render('./battle/show',  res.battle );
  }
});

module.exports = router;
