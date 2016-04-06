/**
 * Created by root on 26/03/2016.
 */

var mongoose = require('mongoose');
var Dishes = require('./models/dishes-3');

var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));

db.once('open', function () {
    Dishes.create({
        name: "Uthpizza",
        description: "Test",
        comments: {
            rating: 5,
            author: "duy le",
            comment: "Good dish"
        }
    }, function (err, dish) {
        if (err) throw err;
        console.log(dish);

        var id = dish._id;
        setTimeout(function () {
            Dishes.findByIdAndUpdate(id, {$set: {description: "Update description"}}, {new: true})
                .exec(function (err, dish) {
                    if (err) throw err;

                    console.log('Upadate the dish');
                    console.log(dish);

                    dish.comments.push({
                        rating: 5,
                        author: "duy leo",
                        comment: "update Comment"
                    });

                    dish.save(function (err, dish) {
                        console.log('update comment');
                        console.log(dish);

                        db.collection('dishes').drop(function () {
                            db.close();
                        });
                    });
                });
        }, 3000);

    });
})
;