var ratingModel = require('../model/rating')

module.exports = {
    async Addrating(req, res) {

        let Addrating = new ratingModel({
            drinkid: req.body.drinkid,
            userid: req.body.userid,
            username: req.body.username,
            rating: req.body.rating
        })

        Addrating.save().then(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                added: true,
                message: 'rating added'
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                added: true,
                message: 'Something went wrong please try again'
            }, null, 3));
        })
    },

    async Selectrating(req, res) {
        ratingModel.find({
            drinkid: req.body.drinkid,
        }).then(function (ratingdata) {
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: true,
                message: 'rating selected',
                ratingdata: ratingdata
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: false,
                message: 'rating selection failed',
            }, null, 3));
        })
    }
}