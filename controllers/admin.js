var drinkModel = require('../model/drink');
const express = require('express')
const app = express();
let multer = require('multer');
let path = require('path')

app.use("/aseets/uploads/images/drinks", express.static("aseets/uploads/images/drinks"))

module.exports= {
      

}