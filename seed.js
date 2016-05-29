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
        username: 'topdogg',
        email: 'admin@me.com',
        password: '123',
        avatar: 'http://quindrycom.richardquindryph.netdna-cdn.com/wp-content/gallery/people/corporate-headshot-Philadelphia-36-Square.jpg'
    },
    {   
        username: 'itsmeg',
        email: 'me@me.com',
        password: '123',
        avatar: 'http://cache1.asset-cache.net/gc/169276487-portrait-of-a-girl-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=PQlZjLvO9SA2DH0d1O1NONBFI0iwOd2qQ8%2FMqWiZbhLFF%2Bzub%2B%2BDi%2BrCmkR5a9z9'
    },
    {
        username: 'dbdogg',
        email: 'debanshi@me.com',
        password: '123',
        avatar: 'http://cache4.asset-cache.net/gc/104304764-woman-with-wild-hair-and-appearance-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=QmXKrUQJl7vZxvsXDhfyOrIbQeuRi2cjbb%2B86BkP%2FeMj4VkhNEYc9ZtB%2BwDaTJpJ3auWcrmRGfH%2BYx3NcDn2dQ%3D%3D'
    },
    {   
        username: 'mynamejeff',
        email: 'jeff@me.com',
        password: '123',
        avatar: 'https://indieboogie.s3.amazonaws.com/uploads/profile/Chris_Jones_HEADSHOT_SQUARE.jpg'
    },
    {
        username: 'henrythehomie',
        email: 'henry@me.com',
        password: '123',
        avatar: 'http://mtf.nyc/wp-content/uploads/2016/02/aaron-headshot-Square.jpg'
    },
    {
        username: 'traubitz',
        email: 'eric@me.com',
        password: '123',
        avatar: 'http://www.bahsbiomed.com/wp-content/uploads/2015/04/Headshot-Clemmer-Square.jpg'
    },
    {
        username: 'katmello',
        email: 'kat@me.com',
        password: '123',
        avatar: 'http://cache1.asset-cache.net/gc/137669046-woman-with-glasses-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=mAoyk%2Bg%2BioP5UYINDg9ca9eOpwS0lIAHPZ6pL6WwGN%2BjBl6YRRFXB5ARhmxfycRh7HekKBnlzcnol7BsV5TUuA%3D%3D'
    },
    {
        username: 'rotatingrafi',
        email: 'rafi@me.com',
        password: '123',
        avatar: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbVFDmP28bLAJRAnojAMYfbOFJSMbThmC0TwdWyOvdHJBvNKeq'
    },
    {
        username: 'daninthevans',
        email: 'dan@me.com',
        password: '123',
        avatar: 'http://drewmoerlein.com/wp-content/uploads/2012/01/headshot-1-full.jpg'
    },
    {
        username: 'gabetheninja',
        email: 'gabe@me.com',
        password: '123',
        avatar: 'http://quindrycom.richardquindryph.netdna-cdn.com/wp-content/gallery/people/corporate-headshot-Philadelphia-36-Square.jpg'
    },
    {
        username: 'omriwankanobi',
        email: 'omri@me.com',
        password: '123',
        avatar: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWVVE_46zwgak6F9i9b76eleaJ1ZnTWNKQYaa2cNpnNDdInb4G'
    },
    {
        username: 'itsjoeyo',
        email: 'joe@me.com',
        password: '123',
        avatar: 'http://quindrycom.richardquindryph.netdna-cdn.com/wp-content/gallery/people/corporate-headshot-Philadelphia-36-Square.jpg'
    },
    {
        username: 'nowayjose',
        email: 'jose@me.com',
        password: '123',
        avatar: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtfas7qduEhawRpTzAulTRH4HDN-y79gUQXjxwnP66vYJbbdX1'
    },
    {
        username: 'dyang',
        email: 'david@me.com',
        password: '123',
        avatar: 'https://www.foundationmedicine.com/wp-content/uploads/2015/09/Matt-Square-Headshot.jpg'
    },
    {
        username: 'nimitinit',
        email: 'nimit@me.com',
        password: '123',
        avatar: 'http://quindrycom.richardquindryph.netdna-cdn.com/wp-content/gallery/people/corporate-headshot-Philadelphia-36-Square.jpg'
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
