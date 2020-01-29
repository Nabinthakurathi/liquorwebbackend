const app= module.exports= require('express')();
const userModel= require('../controllers/user')

app.post('/signup', userModel.RegisterUser);