/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = mongoose.model('User');

var wipeCollections = function () {
    var removeUsers = User.remove({});
    return Promise.all([
        removeUsers
    ]);
};

var seedUsers = function () {

    var users = [
    {   
        username: 'ericT',
        email: 'eric@swimpredictions.com',
        password: 'swimming2016',
        isAdmin: true
    },
    {   
        username: 'itsmeg',
        email: 'me@me.com',
        password: '123',
    },
    {
        username: 'dbdogg',
        email: 'debanshi@me.com',
        password: '123',
    },
    {   
        username: 'mynamejeff',
        email: 'jeff@me.com',
        password: '123',
    },
    {
        username: 'henrythehomie',
        email: 'henry@me.com',
        password: '123',
    },
    {
        username: 'traubitz',
        email: 'eric@me.com',
        password: '123',
    },
    {
        username: 'katmello',
        email: 'kat@me.com',
        password: '123',
    },
    {
        username: 'rotatingrafi',
        email: 'rafi@me.com',
        password: '123',
    },
    {
        username: 'daninthevans',
        email: 'dan@me.com',
        password: '123',
    },
    {
        username: 'gabetheninja',
        email: 'gabe@me.com',
        password: '123',
    },
    {
        username: 'omriwankanobi',
        email: 'omri@me.com',
        password: '123',
    },
    {
        username: 'itsjoeyo',
        email: 'joe@me.com',
        password: '123',
    },
    {
        username: 'nowayjose',
        email: 'jose@me.com',
        password: '123',
    },
    {
        username: 'dyang',
        email: 'david@me.com',
        password: '123',
    },
    {
        username: 'nimitinit',
        email: 'nimit@me.com',
        password: '123',
    }
];

    return User.create(users);

};

connectToDb
    .then(function () {
        return wipeCollections();
    })
    .then(function () {
        return seedUsers();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    })
    .catch(function (err) {
        console.error(err);
        process.kill(1);
    });
