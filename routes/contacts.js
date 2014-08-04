var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var contacts;

mongoClient.connect("mongodb://localhost:27017/contacts", function(err, db) {
    contacts = db.collection('contacts');
});

router.get('/', function(req, res) {
    console.log(111, "get /contacts - list contacts");
    contacts.find().toArray(function(err, result) {
        res.json(result);
    });
});

router.get('/:id', function(req, res) {
    console.log(111, "get /contacts/" + req.params.id + " - read contact");
    contacts.find({
        _id: new mongo.BSONPure.ObjectID(req.params.id)
    }).toArray(function(err, result) {
        res.json(result[0]);
    });
});

router.post('/', function(req, res) {
    console.log(111, "post /contacts - create contact");
    contacts.insert({
        name: req.body.name,
        address: req.body.address,
        tel: req.body.tel,
        email: req.body.email,
        type: req.body.type
    }, function(err, insertedContact) {
        res.json(insertedContact[0]);
    });
});

router.put('/:id', function(req, res, next) {
    console.log(111, "put /contacts/" + req.params.id + " - update contact");
    contacts.update({
        _id: new mongo.BSONPure.ObjectID(req.params.id)
    }, {
        name: req.body.name,
        address: req.body.address,
        tel: req.body.tel,
        email: req.body.email,
        type: req.body.type
    }, function(err, updatedContact) {
        res.json(updatedContact);
    });
    //    res.json("put /contacts/" + req.params.id);
});

router.delete('/:id', function(req, res, next) {
    console.log(111, "delete /contacts/" + req.params.id + " - delete contact");
    contacts.remove({
        _id: new mongo.BSONPure.ObjectID(req.params.id)
    }, function(err, removedContact) {
        res.json(removedContact);
    });
});

module.exports = router;