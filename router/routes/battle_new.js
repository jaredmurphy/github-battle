const express = require('express');
const router = express.Router();
const db = require('../../db/db');

router.post('/', db.create_battle, function (req, res) {
  if(res.error){
    res.send(res.error)
    // req.flash('error', res.error);
  } else {
    var battle = { id: res.battle_id.id };
    res.send(battle);
  }
});
module.exports = router;
