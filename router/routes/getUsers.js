// const express = require('express');
// const router = express.Router();
// const db = require('../../db/db');
//
// router.get('/:login', db.get_user_by_login, function (req, res) {
//   if(res.error){
//     req.flash('error', res.error);
//     res.send(res.error)
//   } else {
//     console.log(res.user)
//     res.send(res.user);
//   }
// });
//
//
// router.get('/:id', db.get_user_by_id, function (req, res) {
//   if(res.error){
//     req.flash('error', res.error);
//   } else {
//     //res.render('./battle/show',  res.battle );
//   }
// });
//
// module.exports = router;
