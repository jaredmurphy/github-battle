const express = require('express');
const router = express.Router();
const db = require('../../db/db');

router.post('/', db.create_battle, function (req, res) {
  if(res.error){
    res.send(res.error)
    // req.flash('error', res.error);
  } else {
    console.log('should redirect right about now');
    console.log("battle", res.battle)
    res.send("success");
  }
});
module.exports = router;
