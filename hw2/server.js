/**
 * Created by root on 29/03/2016.
 */

'use strict';

var mongoose = require('mongoose');
var Dishes = require('./model/dish');
var Promos = require('./model/promotion');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function () {
    Dishes.create({
        name: 'Uthappizza',
        image: 'images/uthappizza.png',
        category: 'mains',
        label: 'Hot',
        price: '4.99',
        description: 'A good dish',
        comments: [
            {
                rating: 5,
                comment: 'Image all the estables, living in conFusion',
                author: 'John Lemon'
            },
            {
                rating: 4,
                comment: 'Send anyone to heaven, I wish i could get my mother-in-law to eat',
                author: 'Paul McVites'
            }
        ]

    }, function (err, dish) {
        if (err) throw err;
        console.log(dish);

        var dishId = dish._id;
        setTimeout(function () {
            Dishes.findByIdAndUpdate(dishId, {$set: {"comments.0.comment": "Update comment"}}, {new: true})
                .exec(function (err, dish) {
                    if (err) throw err;
                    console.log('After update the dish');
                    console.log(dish);

                    dish.comments.push({
                        rating: 5,
                        comment: 'Perfect',
                        author: 'Duy Le'
                    });

                    dish.save(function (err, dish) {
                        console.log('Add comment');
                        console.log(dish);
                    });
                })

        }, 3000);
    });

    Promos.create({

        name: "Weekend Grand Buffet",
        image: "images/buffet.png",
        label: "New",
        price: "19.99",
        description: "Featuring . . ."

    }, function (err, promo) {
        if (err) throw err;
        console.log(promo);
    });

});