var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js');
var Message = sequelize.import('../models/message.js');

  router.post('/', function(req, res) {
    console.log("******************Req.user register",req.user)
    console.log("******************Req.params register",req.params)
    console.log("******************Req.params register",req.body)

  //methods   //objects must match the model
  Message.create({ 
          owner: req.params.id,
          type: req.body.message.type,
          comment: req.body.message.comment,
          partner:req.body.message.partner,
          division:req.body.message.division
        }).then(
      function createSuccess(message) {
        //send a response as json
            res.json(message);
      }, 
          function createError(err) {
            res.send(500, err.message);
          }

          );
  });
  // router.get('/', function(req, res) {
  //   //user variable
  //   var userid = req.user.id;
  //   Message.findAll({
  //     where: { owner: userid }
  //   }).then(
  //     //success
  //     function findAllSuccess(data) {
  //       console.log(data);
  //       res.json(data);
  //     },
  //     //failure
  //     //error
  //     function findAllError(err) {
  //       res.send(500, err.message);
  //   });
  // });

    module.exports = router;
    