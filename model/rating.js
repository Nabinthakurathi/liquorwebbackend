const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    drinkid: {
        type: String
    },
    userid: {
        type: String
    },
    username: {
        type: String
    },
    rating: {
        type: String
    },

})

const rating = mongoose.model('rating', ratingSchema);
module.exports = rating;