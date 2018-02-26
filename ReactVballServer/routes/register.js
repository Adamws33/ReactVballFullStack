var router = require('express').Router();
var sequelize = require('../db');
var Register = sequelize.import('../models/register');
var User = sequelize.import('../models/user');
// var Definition = sequelize.import('../models/definition');

router.post('/', function(req, res) {
	console.log("******************Req.user register",req.user)
	console.log("******************Req.params register",req.params)
	console.log("******************Req.body register",req.body)
	

  // Use our sequelize model to create log
  Register.create({ 
      owner: req.params.id,
      date: req.body.register.date,
      captain: req.body.register.captain,
      partner: req.body.register.partner,
      phone: req.body.register.phone,
      email: req.body.register.email,
      division: req.body.register.division,
    })
    .then(
      function createSuccess(register) {
        res.json(register);
      }, 
      function createError(err) {
          res.send(500, err.message);
      }
    );
});
// router.get('/', function(req, res) {
//   var userid = req.user.id;
//   console.log("******************",userid)
// 	Register.findAll({
// 		where: { owner: userid }
// 	})
// 	.then(
// 		function findAllSuccess(data) {
// 			// console.log(data);
// 			res.json(data);
// 		},
// 		function findAllError(err) {
// 			res.send(500, err.message);
// 		}
// 	);
// });

// router.get('/:id', function(req, res) {
// 	var data = req.params.id;
// 	//console.log(data); here for testing purposes
// 	Register.findOne({
// 			where: { id: data }
// 		}).then(
// 			function getSuccess(updateData) {
// 				res.json(updateData);
// 			},

// 			function getError(err) {
// 				res.send(500, err.message);
// 			}
//     );
//   });

module.exports = router;