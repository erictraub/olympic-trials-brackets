'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Prediction = mongoose.model('Prediction');
var Promise = require('bluebird');
module.exports = router;



router.get('/', function(req, res, next){
	Prediction.find(req.query)
	.populate('owner group')
	.then(function(prediction){
		res.status(200).send(prediction);
	})
	.catch(next);
});

router.post('/', function(req, res, next) {
	Prediction.findOne({ owner: req.body.owner, group: req.body.group, sex: req.body.sex })
	.then(function(prediction) {
		if (!prediction) {
			return Prediction.create(req.body);
		} else {
			return Prediction.findByIdAndUpdate(prediction._id, req.body, { upsert: true, new: true });
		}
	})
	.then(function(prediction) {
		res.status(201).send(prediction);
	})
	.catch(next);
});

router.get('/:predictionId', function(req, res, next){
	Prediction.findById(req.params.predictionId)
	.then(function(prediction){
		res.status(200).send(prediction);
	})
	.catch(next);
});

router.put('/:predictionId', function(req, res, next){
	Prediction.findByIdAndUpdate(req.params.predictionId, req.body, {new: true})
	.then(function(updatedUser){
		res.status(200).send(updatedUser);
	})
	.catch(next);
});