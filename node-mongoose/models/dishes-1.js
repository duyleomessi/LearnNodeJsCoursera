/**
 * Created by root on 26/03/2016.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema

var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

// we need to create model using the schema
var Dishes = mongoose.model("Dish", dishSchema);

// make the model available to the Node application
module.exports = Dishes;