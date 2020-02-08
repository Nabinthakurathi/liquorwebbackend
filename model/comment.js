const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    drinkid: {
        type: String
    },
    userid: {
        type: String
    },
    username: {
        type: String
    },
    comment: {
        type: String
    },

})

const comment = mongoose.model('comment', commentSchema);
module.exports = comment;