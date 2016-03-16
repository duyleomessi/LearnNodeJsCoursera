/* Created by root on 14/03/2016. */

'use strict';

module.exports = function (x, y, callback) {
    try {
        if (x <= 0 || y <= 0) {
            throw new Error(error);
        } else {
            callback(null, {
                perimeter: function () {
                    return (2 * (x + y));
                },
                area: function () {
                    return (x * y);
                }
            });
        }

    } catch (err) {
        callback(err, null);
    };
}