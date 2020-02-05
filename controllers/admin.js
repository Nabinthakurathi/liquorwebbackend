var drinkModel = require('../model/drink');
const express = require('express')
const app = express();


module.exports = {

    async getAllDrinks(req, res) {

        drinkModel.find().then(function (result) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                getdrinks: true,
                message: 'Drinks selected',
                data: result
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                getdrinks: false,
                message: 'Drinks selection failed',
            }, null, 3));
        })
    },

    async deleteDrink(req, res) {
        var id = req.body.id;

        drinkModel.findByIdAndDelete(id).then(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                deleted: true,
                message: 'Drink deleted',
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                deleted: false,
                message: 'Failed to delete drink',
            }, null, 3));
        })
    },

    async getSingleDrink(req, res) {
        var id = req.params.id;
        drinkModel.findById(id).then(function (data) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: true,
                message: 'Drink selected',
                data: data
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: false,
                message: 'Drink selection failed',
                data: data
            }, null, 3));
        })
    },

    async updateDrink(req, res) {
        var id = req.body.id;
        var drinktype = req.body.drinktype;
        var drinkname = req.body.name;
        var price = req.body.price;
        var image = req.body.image;

        drinkModel.updateOne({ _id: id }, {
            $set: {
                drinktype: drinktype,
                drinkname: drinkname,
                price: price,
                image: image
            }
        }).then(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                updated: true,
                message: 'Drink updated',
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                updated: false,
                message: 'Drink update failed',
            }, null, 3));
        })
    }
}