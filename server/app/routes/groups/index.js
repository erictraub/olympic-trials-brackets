'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Group = mongoose.model('Group');
var User = mongoose.model('User');
var Promise = require('bluebird');
module.exports = router;



router.get('/', function(req, res, next){
	Group.find(req.query)
	.populate('creator')
	.then(function(groups){
		res.status(200).send(groups);
	})
	.catch(next);
});

router.get('/:groupId', function(req, res, next){
	Group.findById(req.params.groupId)
	.populate('members')
	.then(function(group){
		res.status(200).send(group);
	})
	.catch(next);
});

router.post('/', function(req, res, next){
	Group.create(req.body)
	.then(function(group){
		res.status(201).send(group);
	})
	.catch(next);
});

router.put('/:groupId', function(req, res, next){
	Group.findByIdAndUpdate(req.params.groupId/*, {$set: {'finalImage': req.body.finalImage}}*/, {new: true})
	.then(function(updatedGroup){
		res.status(200).send(updatedGroup);
	})
	.catch(next);
});

router.put('/:groupId/members', function(req, res, next){
	var addedUser;
	User.findOne({ email: req.body.userEmail })
	.then(function(user) {
		if(!user) return res.send('user not found');
		addedUser = user;
		return Group.findByIdAndUpdate(req.params.groupId, { $addToSet: { members: user._id }}, {new: true})
	})
	.then(function(){
		res.status(200).send(addedUser);
	})
	.catch(next);
});

router.get('/:groupId/members', function(req, res, next){
	Group.findById(req.params.groupId)
	.populate('members')
	.then(function(group) {
		res.send(group.members);
	})
	.catch(next);
});

router.put('/:groupId/removeMember/:memberId', function(req, res, next) {
	Group.findById(req.params.groupId)
	.populate('members')
	.then(function(group) {
		group.members.pull(req.params.memberId);
		return group.save();
	})
	.then(function(group) {
		res.send(group);
	})
	.catch(next);
});














