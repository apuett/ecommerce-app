const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    key:{
        type: Number,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    price:{
        type:String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    image_path:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('productTable', Product);