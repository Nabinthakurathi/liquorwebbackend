const mongoose= require('mongoose');

const drinksSchema= new mongoose.Schema({
    
    drinktype:{
        type:String
    },
    drinkname:{
        type:String
    },
    price:{
        type:String
    },
    image:{
        type:String
    },
   
})

const drinks= mongoose.model('drink', drinksSchema);
module.exports=drinks;