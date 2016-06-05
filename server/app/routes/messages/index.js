'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Promise = require('bluebird');
module.exports = router;



router.get('/', function(req, res, next){
	Message.find(req.query)
	.populate('from')
	.then(function(message){
		res.status(200).send(message);
	})
	.catch(next);
});

router.post('/', function(req, res, next) {
	Message.create(req.body)
	.then(function(message) {
		res.send(message);
	})
	.catch(next);
});

router.get('/:messageId', function(req, res, next){
	Message.findById(req.params.messageId)
	.then(function(message){
		res.status(200).send(message);
	})
	.catch(next);
});
