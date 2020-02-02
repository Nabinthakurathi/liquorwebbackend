const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    password:{
        type:String
    },
    usertyoe:{
        type:String
    }
})

const user= mongoose.model('user', userSchema);
module.exports=user;