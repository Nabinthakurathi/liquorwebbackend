var userModel = require('../model/user');


module.exports = {
    async RegisterUser(req, res) {

        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;
        let password = req.body.password;

        userModel.findOne({
            email:email
        }).then(function (result) {
            if (result == null) {
                var addUser = new userModel({
                    name: name,
                    email: email,
                    phone: phone,
                    password: password
                });

                addUser.save().then(function () {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        registered: true,
                        message: 'New user registered'
                    }, null, 3));
                }).catch(function () {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        registered: false,
                        message: 'Something went wrong please try again'
                    }, null, 3));
                })
            }
            else{
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    registered: false,
                    message: 'User already exist'
                }, null, 3));
            }
        })


    }
}