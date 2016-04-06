/**
 * Created by root on 28/03/2016.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/commercial';
MongoClient.connect(url, function (err, db) {
    assert.equal(err, null);
    console.log('Succesfully connected');

    db.collection('commercial').find({}).toArray(function (err, docs) {

        docs.forEach(function(doc) {
            doc.FeeDetail.Date.Regularfee.Monthly.forEach(function(detail) {
                if (detail.ReceiptNo === '385') {
                    console.log(detail.Month);
                }
            })
        })
    })
});