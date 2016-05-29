'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Bracket = mongoose.model('Bracket');
var Promise = require('bluebird');
module.exports = router;



router.get('/', function(req, res, next){
	Bracket.find(req.query)
	.then(function(bracket){
		res.status(200).send(bracket);
	})
	.catch(next);
});

router.get('/:bracketId', function(req, res, next){
	Bracket.findById(req.params.bracketId)
	.then(function(bracket){
		res.status(200).send(bracket);
	})
	.catch(next);
});

router.put('/:bracketId', function(req, res, next){
	Bracket.findByIdAndUpdate(req.params.bracketId, req.body, {new: true})
	.then(function(updatedUser){
		res.status(200).send(updatedUser);
	})
	.catch(next);
});