var drinkModel = require('../model/drink');
const express = require('express')
const app = express();


module.exports= {
    async getDrinksCatories(req, res){
        let drinktype=req.params.drinktype;

        drinkModel.find({
            drinktype:drinktype
        }).then(function(result){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                getdrinks: true,
                message: 'Drinks selected',
                data:result
            }, null, 3));
        }).catch(function(ddd){
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                getdrinks: false,
                message: 'Drinks selection failed',
            }, null, 3));
        })

    }
}