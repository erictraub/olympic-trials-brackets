'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    sex: {
        type: String,
        enum: ['men', 'women']
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
    back100: [{
        type: String
    }],
    back200: [{
        type: String
    }],
    breast100: [{
        type: String
    }],
    breast200: [{
        type: String
    }],
    fly100: [{
        type: String
    }],
    fly200: [{
        type: String
    }],
    free50: [{
        type: String
    }],
    free100: [{
        type: String
    }],
    free200: [{
        type: String
    }],
    free400: [{
        type: String
    }],
    free1500: [{
        type: String
    }],
    im200: [{
        type: String
    }],
    im400: [{
        type: String
    }]
});

mongoose.model('Prediction', schema);