var commentModel = require('../model/comment')

module.exports = {
    async AddComment(req, res) {

        let AddComment = new commentModel({
            drinkid: req.body.drinkid,
            userid: req.body.userid,
            username: req.body.username,
            comment: req.body.comment
        })

        AddComment.save().then(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                added: true,
                message: 'Comment added'
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                added: true,
                message: 'Something went wrong please try again'
            }, null, 3));
        })
    },

    async SelectComment(req, res) {
        commentModel.find({
            drinkid: req.body.drinkid,
        }).then(function (commentdata) {
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: true,
                message: 'comment selected',
                commentdata: commentdata
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: false,
                message: 'comment selection failed',
            }, null, 3));
        })
    }
}