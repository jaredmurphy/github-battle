const express = require('express');
const router = express.Router();
const db = require('../../db/db');

router.post('/', db.create_battle, function (req, res) {
  if(res.error){
    req.flash('error', res.error);
  } else {
    console.log('should redirect right about now');
    //res.send();
    res.render('./battle/show');
  }
});
module.exports = router;
