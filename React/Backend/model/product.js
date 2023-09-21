const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Productschema = new Schema({
    product_name:String,
    image:String,
    description:String,
    price:Number
});

module.exports=mongoose.model('Product',Productschema);