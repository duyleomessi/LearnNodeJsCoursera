/**
 * Created by root on 15/03/2016.
 */

'use strict';

var add = function (l, b, callback) {
    callback(null, {
        tong: function () {
            return (l + b);
        }
    });
};


add(1, 2, function (err, rectangle) {
    if (err) {
        console.log(err);
    } else {
        console.log(rectangle.tong());
    }
});


var add1 = function(callback) {
    callback(1, 2);
}
add1(function(a, b) {
    console.log(a + b);
});
