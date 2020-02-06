let app= module.exports= require('express')();
let commentController= require('../controllers/comment')


app.post('/', commentController.AddComment);
app.put('/', commentController.SelectComment);