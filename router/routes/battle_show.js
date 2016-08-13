const express = require('express');
const router = express.Router();
const db = require('../../db/db');

router.get('/:id', db.show_battle, function (req, res) {
  console.log(req.params)
  if(res.error){
    req.flash('error', res.error);
  } else {
    console.log('succcess')
  }
});
module.exports = router;
