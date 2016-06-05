'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String
    },
    subject: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Message', schema);