var express = require('express');
var fs = require('fs');
var router = express.Router();
var UserModel = require('../models/UserModel');

/ GET users listing. */
router.get('/new', function(req, res, next) {
	console.log("jsondat");
  	var jsondata = fs.readFileSync('http://mbeta.newchic.com/index.php?com=index&t=huiText');
  	console.log(jsondata);
  	response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   	};
   	console.log(response);
  	next();  	
  	res.render('user', {title: 'Express'});
});

router.get('/login', function(req, res, next) {	
  	res.render('login', {title: 'Login'});
});

router.post('/loginAction', function(req, res, next) {	
	var Users = new UserModel(req.body);
	Users.addUser();
  	res.render('login', {title: 'Login'});
});

router.get('/all', function(req, res, next) {
	var Users = new UserModel();
	Users.findAllUser(function(err,data){
		if(err){
			console.log(err);
		}else{
			res.render('user_list', {title: 'User List',datas: data});
		}		
	});  	
});

module.exports = router;