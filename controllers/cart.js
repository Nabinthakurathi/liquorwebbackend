var cartModel = require('../model/cart');
const express = require('express')


module.exports = {
    async addToCart(req, res) {

        let addDrinkToCart = new cartModel({
            drinkid: req.body.drinkid,
            drinkname: req.body.drinkname,
            drinkprice: req.body.drinkprice,
            drinkimage: req.body.drinkimage,
            userid: req.body.userid,
            useremail: req.body.useremail,
            username: req.body.username,
            userphone: req.body.userphone,
            cart: req.body.cart,
            wishlist: req.body.wishlist
        })

        addDrinkToCart.save().then(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                added: true,
                message: 'Drink added to cart'
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                added: false,
                message: 'Failed to add dirnk to cart'
            }, null, 3));
        })


    }
}

