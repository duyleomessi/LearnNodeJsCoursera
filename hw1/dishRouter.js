/**
 * Created by root on 22/03/2016.
 */

var express = require('express');
var bodyParser = require('body-parser');
var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all(function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        next();
    })

    .get(function (req, res) {
        res.end('Will send all dishes to you');
    })

    .post(function (req, res) {
        res.end('Post all dishes to server');
    })

    .delete(function (req, res) {
        res.end('Deleting all dishes');
    });

dishRouter.route('/:dishId')
    .all(function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        next();
    })

    .get(function (req, res) {
        res.end('Get the dish with id: ' + req.params.dishId);
    })

    .put(function (req, res) {
        res.write('Updating the dish: ' + req.params.dishId);
        res.end('Will update the dish ' + req.body.name + ' with detail ' + req.body.description);
    })

    .delete(function (req, res) {
        res.end('Deleting dish: ' + req.params.dishId);
    });


module.exports = dishRouter;
