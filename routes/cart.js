let app = module.exports = require('express')();
let cartController = require('../controllers/cart')

app.post('/addtocartwishlist', cartController.addToCart);