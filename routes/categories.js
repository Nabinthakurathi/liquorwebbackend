const app = module.exports = require('express')();
let categoriesController = require('../controllers/categories')

app.get('/getdrinks/:drinktype', categoriesController.getDrinksCatories);
