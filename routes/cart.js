let app = module.exports = require('express')();
let cartController = require('../controllers/cart')

app.post('/addtocart', cartController.addToCart);