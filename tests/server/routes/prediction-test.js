// Instantiate all models
var mongoose = require('mongoose');
require('../../../server/db/models');
var Prediction = mongoose.model('Prediction');

var expect = require('chai').expect;

var dbURI = 'mongodb://localhost:27017/testingDB';
var clearDB = require('mocha-mongoose')(dbURI);

var supertest = require('supertest');
var app = require('../../../server/app');


describe('Predictions Route', function() {

    beforeEach('Establish DB connection', function(done) {
        if (mongoose.connection.db) return done();
        mongoose.connect(dbURI, done);
    });

    afterEach('Clear test database', function(done) {
        clearDB(done);
    });

    describe('Create a Prediction', function() {

        var clientA = supertest.agent(app);

        it('POST one', function(done) {
            clientA
                .post('/api/predictions')
                .send({
                    back100: ['Ryan Murphy', 'David Plumer', '51.7', '52.1'],
                    im400: ['Chase Kalisz', 'Tyler Clary', '4:07.9', '4:08.5'],
                    sex: 'men'
                })
                .expect(201)
                .end(function(err, res) {
                    if (err) return done(err);
                    expect(res.body.back100).to.be.an('array');
                    expect(res.body.im400).to.be.an('array');
                    expect(res.body.back100[2]).to.equal('51.7');
                    expect(res.body.sex).to.equal('men');
                    expect(res.body._id).to.exist;
                    Prediction.findById(res.body._id, function(err, b) {
                        if (err) return done(err);
                        expect(b).to.not.be.null;
                        done();
                    });
                });
        });

    });

    describe('Getting all predictions', function() {

        var clientA = supertest.agent(app);

        it('GET all predictions', function(done) {
            clientA
                .get('/api/predictions')
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });


    describe('Getting one Prediction by ID', function() {

        var newPrediction = {
            breast200: ['Katie Meili', 'Lily King', '1:05.4', '1:05.5'],
            free100: ['Lia Neal', 'Katie Ledecky', '53.5', '53.6'],
            sex: 'women'
        };

        var newPredictionID;

        beforeEach('Create a review', function (done) {
            Prediction.create(newPrediction)
            .then(function(prediction) {
                newPredictionID = prediction._id;
                done();
            });
        });


        var clientA = supertest.agent(app);

        it('GET one by ID', function(done) {
            clientA
                .get('/api/predictions/' + newPredictionID)
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    expect(res.body.breast200).to.be.an('array');
                    expect(res.body.free100).to.be.an('array');
                    expect(res.body.sex).to.equal('women');
                    expect(res.body).to.be.an('object');
                    expect(res.body._id).to.exist;    
                    done();
                });
        });

    });



        describe('Updating one prediction by ID', function() {

        var newPrediction = {
            breast200: ['Katie Meili', 'Lily King', '1:05.4', '1:05.5'],
            free100: ['Lia Neal', 'Katie Ledecky', '53.5', '53.6'],
            sex: 'women'
        };

        var newPredictionID;

        beforeEach('Create a prediction', function (done) {
            Prediction.create(newPrediction)
            .then(function(prediction) {
                newPredictionID = prediction._id;
                done();
            });
        });

        console.log('IDDD:',newPredictionID)


        var clientA = supertest.agent(app);

        it('PUT one by ID', function(done) {
            clientA
                .put('/api/predictions/' + newPredictionID)
                .send({
                    breast100: ['Lily King', 'Katie Meili', '1:05.3', '1:05.8'],
                    free100: ['Missy Franklin', 'Allison Schmidt', '53.6', '53.8'],
                })
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    expect(res.body.breast100[0]).to.equal('Lily King');
                    expect(res.body.breast100[1]).to.equal('Katie Meili');
                    expect(res.body.breast100[2]).to.equal('1:05.3');
                    expect(res.body.breast100[3]).to.equal('1:05.8');
                    expect(res.body.free100[0]).to.equal('Missy Franklin');
                    expect(res.body.free100[1]).to.equal('Allison Schmidt');
                    expect(res.body.free100[2]).to.equal('53.6');
                    expect(res.body.free100[3]).to.equal('53.8');
                    expect(res.body).to.be.an('object');
                    expect(res.body._id).to.exist;    
                    done();
                });
        });
    });

});
