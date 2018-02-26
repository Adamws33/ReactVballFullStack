var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js');
var Message = sequelize.import('../models/message.js');

  router.post('/', function(req, res) {

  //methods   //objects must match the model
  Message.create({ 
          owner: req.body.message.owner,
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
  router.get('/', function(req, res) {
    //user variable
    // var data = req.user.id
    // console.log("****OWNER GET****",req.user.id)
    Message.findAll(
      // {where: { owner: req.user.id }}
    ).then(
      //success
      function findAllSuccess(data) {
        console.log("****DATA****",data);
        res.json(data);
      },
      //failure
      //error
      function findAllError(err) {
        res.send(500, err.message);
    });
  });

    module.exports = router;
    