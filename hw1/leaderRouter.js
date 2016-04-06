/**
 * Created by root on 22/03/2016.
 */

var express = require('express');
var bodyParser = require('body-parser');
var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all(function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        next();
    })

    .get(function (req, res) {
        res.end('Will send all leaders to you');
    })

    .post(function (req, res) {
        res.end('Posting leader to server');
    })

    .delete(function (req, res) {
        res.end('Deleting all leaders');
    });

leaderRouter.route('/:id')
    .all(function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        next();
    })

    .get(function (req, res) {
        res.end('Get the leader ' + req.params.id);
    })

    .put(function (req, res) {
        res.write('Updating the leader ' + res.params.id);
        res.end('Name: ' + req.body.name + ' with detail ' + req.body.description);
    })

    .delete(function (req, res) {
        res.end('Deleting dish ' + req.params.id);
    });

module.exports = leaderRouter;