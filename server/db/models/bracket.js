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
    '100back': [{
        type: String
    }],
    '200back': [{
        type: String
    }],
    '100breast': [{
        type: String
    }],
    '200breast': [{
        type: String
    }],
    '100fly': [{
        type: String
    }],
    '200fly': [{
        type: String
    }],
    '50free': [{
        type: String
    }],
    '100free': [{
        type: String
    }],
    '200free': [{
        type: String
    }],
    '400free': [{
        type: String
    }],
    '1500free': [{
        type: String
    }],
    '200im': [{
        type: String
    }],
    '400im': [{
        type: String
    }]
});

mongoose.model('Bracket', schema);