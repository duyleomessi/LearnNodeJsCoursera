/**
 * Created by root on 29/03/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Will add the Currency type to the Mongoose Schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true

    },
    description: {
        type: String,
        required: true
    }
})

var Promotion = mongoose.model('Promotion', promoSchema);
module.exports = Promotion;


