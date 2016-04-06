/**
 * Created by root on 22/03/2016.
 */

'use strict';

var express = require('express');
var morgan = require('morgan');

//var dishRouter = require('./dishRouter');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));


var dishRouter = require('./dishRouter');

app.use('/dishes', dishRouter);

var promoRouter = require('./promoRouter');
app.use('/promos', promoRouter);

var leaderRouter = require('./leaderRouter');
app.use('/leadership', leaderRouter);

app.listen(port, hostname, function () {
    console.log('Server listen at ' + hostname + ':' + port + '/');
});