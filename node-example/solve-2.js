/**
 * Created by root on 14/03/2016.
 */

'use strict';

var rect = require('./rectangle-2');

function solveRect(l, b) {
    rect(l, b, function (err, rectangle) {
        if (err) {
            console.log(err);
        } else {
            console.log("the perimeter of the rectangle with dimension l: " + l + " b: " + b + " is: " + rectangle.area());
            console.log("the area of the rectangle: " + rectangle.perimeter());
        }
    });
}

solveRect(3, 4);
solveRect(-1, 2);
