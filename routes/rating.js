let app = module.exports = require('express')();
let ratingController = require('../controllers/rating')


app.post('/', ratingController.Addrating);
app.put('/', ratingController.Selectrating);