/**
 * Created by root on 26/03/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create comment Schema
var commentSchema = new Schema({
    rating: {
        type: String,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamp: true
})


// create dish Schema
var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchema]
}, {
    timestamp: true
});

//
var Dishes = mongoose.model('Dish', dishSchema);
module.exports = Dishes;