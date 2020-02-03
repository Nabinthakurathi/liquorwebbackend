var drinkModel = require('../model/drink');
const express = require('express')
const app = express();


module.exports= {
      
    async getAllDrinks(req, res){

        drinkModel.find().then(function(result){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                getdrinks: true,
                message: 'Drinks selected',
                data:result
            }, null, 3));
        }).catch(function(){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                getdrinks: false,
                message: 'Drinks selection failed',
            }, null, 3));
        })
    },

    async deleteDrink(req, res){
        var id= req.body.id;

        drinkModel.findByIdAndDelete(id).then(function(){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                deleted: true,
                message: 'Drink deleted',
            }, null, 3));
        }).catch(function(){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                deleted: false,
                message: 'Failed to delete drink',
            }, null, 3));
        })
    }
}