/**
 * Created by root on 26/03/2016.
 */

var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require('./models/dishes-1');

var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log('Connect successfully');

    Dishes.create({name: 'Uthapizza', description: 'Test'}, function (err, dish) {
        if (err) throw err;
        console.log(dish);

        var id = dish._id;

        // get all dishes after 3 second
        setTimeout(function () {
            Dishes.findByIdAndUpdate(id, {$set: {description: 'update description'}}, {new: true})
                .exec(function (err, dish) {
                    if (err) throw err;
                    console.log('Update dish');
                    console.log(dish);

                    db.collection('dishes').drop(function () {
                        db.close();
                    });
                });
        }, 3000);
    });
});
