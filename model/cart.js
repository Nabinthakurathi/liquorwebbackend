const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    drinkid: {
        type: String
    },
    drinkname: {
        type: String
    },
    drinkprice: {
        type: String
    },
    drinkimage: {
        type: String
    },
    drinktype: {
        type: String
    },
    userid: {
        type: String
    },
    useremail: {
        type: String
    },
    username: {
        type: String
    },
    userphone: {
        type: String
    },
})

const cart = mongoose.model('cart', cartSchema);
module.exports = cart;