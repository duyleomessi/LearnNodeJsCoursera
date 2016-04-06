/**
 * Created by root on 26/03/2016.
 */

var mongoose = require("mongoose");
var assert = require("assert");

var Dishes = require("./models/dishes-1");

var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;

// Handle error when connect to server
db.on("error", console.error.bind(console, 'connection error'));

// Connect successfully
db.once('open', function () {
    console.log("Connect successfully");

    // create new dish
    var newDish = new Dishes({
        name: 'Uthapizza',
        description: 'Test'
    });

    // save the dish
    newDish.save(function (err) {
        // Handle error
        if (err) throw err;
        // Successfully
        console.log('Dish created!');

        // Get all dish
        Dishes.find({}, function (err, dishes) {
            if (err) throw err;
            console.log(dishes);

            db.collection('dishes').drop(function () {
                db.close();
            });
        })
    });
});