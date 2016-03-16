/**
 * Created by root on 15/03/2016.
 */

'use strict';

var arg = require('yargs')
    .usage('Usage: node $0 --l[num] --b[num]')
    .demand(['x', 'y'])
    .argv;

/* node solve-3.js --x=3 --y=2 */


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

solveRect(arg.x, arg.y);
