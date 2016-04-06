/**
 * Created by root on 22/03/2016.
 */

var express = require('express');
var bodyParser = require('body-parser');

var promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all(function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        next();
    })

    .get(function (req, res) {
        res.end('Will send all promotions for you');
    })

    .post(function (req, res) {
        res.end('Posting all promotion');
    })

    .delete(function (req, res) {
        res.end('Deleting all promotions');
    });

promoRouter.route('/:promoId')
    .all(function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        next();
    })

    .get(function (req, res) {
        res.end('Get the promotion with id: ' + req.params.promoId);
    })

    .put(function (req, res) {
        res.end('Updating promotion ' + req.params.promoId + ' name ' + req.body.name + ' with detail ' + req.body.description);
    })

    .delete(function (req, res) {
        res.end('Deleting dish ' + req.params.promoId);
    });

module.exports = promoRouter;