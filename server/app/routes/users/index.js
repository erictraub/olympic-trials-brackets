'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Promise = require('bluebird');
module.exports = router;


router.get('/', function(req, res, next){
	User.find(req.query)
	.then(function(users){
		res.status(200).send(users);
	})
	.catch(next);
});

router.get('/:userId', function(req, res, next){
	User.findById(req.params.userId)
	.then(function(user){
		res.status(200).send(user);
	})
	.catch(next);
});

router.post('/', function(req, res, next){
	User.create(req.body)
	.then(function(user){
		res.status(201).send(user);
	})
	.catch(next);
});

router.put('/:userId', function(req, res, next){
	User.findById(req.params.userId)
	.then(function(user){
		user[req.body.updateProp] = req.body.updateKey;
		return user.save();
	})
	.then(function(user) {
		res.send(user);
	})
	.catch(next);
});