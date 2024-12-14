const mongoose = require('mongoose')

const productModel = new mongoose.Schema({
  title  : {
        type : String,
        require : true
    },
    dipscription : {
        type : String,
        require : true
    },
    price : {
        type : String,
        require : true
    },
    salePrice : {
        type : String,
        require : true
    },
    fabric : {
        type : String,
        required : true
    },
   color : {
    type : String,
    required : true
   },
   hotSells : {
    type : String,
    required : true
   },
   type : {
    type : String,
    required : true
   },
   fabric : {
    type : String,
    required : true
   },
   image : {
    type : String,
    required : true
   }
})

module.exports = mongoose.model("productModel", productModel)


