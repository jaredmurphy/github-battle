const express = require('express');
const router = express.Router();
const db = require('../../db/db');


router.get('/', db.home, function (req, res) {
  if(res.error){
    req.flash('error', res.error);
  } else {
    var data = {
      images: res.user_images
    }
    console.log(data);
    res.render('./app/home',  data);
  }
});


module.exports = router;
