const app = module.exports = require('express')();
const port= 8080;
app.get('/', (req, res) => {
    res.send({ msg: 'server is on'+ port});
});


//register other routes here 
app.use('/users', require('./user'))
app.use('/admin', require('./admin'))
app.use('/categories', require('./categories'))
app.use('/cart', require('./cart'))
