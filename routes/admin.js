const app = module.exports = require('express')();
let multer = require('multer');
let path = require('path')
let drinkModel = require('../model/drink')
let adminController=require('../controllers/admin')

var ImagefileName = '';
var storage = multer.diskStorage({
    destination: 'asset/uploads/images/drinks',
    filename: function (req, file, callback) {
        const extension = path.extname(file.originalname);
        ImagefileName = file.fieldname + Date.now() + extension;
        callback(null, ImagefileName);

    }
});


var imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error("You can upload only image files!"), false);
    }
    cb(null, true);
};

var upload = multer({
    storage: storage,
    fileFilter: imageFileFilter,
    limits: {
        fileSize: 10000000
    }
});

app.post('/upload/drink/image', upload.single('image'), function (req, res) {

    console.log(req.body);
    console.log(ImagefileName)

    let drinkname = req.body.name;
    let drinktype = req.body.drinktype;
    let drinkprice = req.body.price;
    let image = ImagefileName;

    AddDrink = new drinkModel({
        drinktype: drinktype,
        drinkname: drinkname,
        price: drinkprice,
        image: image
    })

    AddDrink.save().then(function () {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            added: true,
            message: 'New drink added'
        }, null, 3));
    }).catch(function () {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            added: false,
            message: 'Something went wrong please try again'
        }, null, 3));
    })



})

app.get('/getalldrink', adminController.getAllDrinks);
app.delete('/delete_drink', adminController.deleteDrink);
app.get('/getsingledrink/:id', adminController.getSingleDrink);
app.post('/updatedrink', adminController.updateDrink);