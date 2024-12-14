const { default: mongoose } = require("mongoose")
const ProductModel = require("../models/Product.model")
const { prodcutaAllData } = require("../data")

// Controller for sending data of all product 
const handleAllProdcutReq = async(req,res)=> {
  try {
  const allProdcut = await ProductModel.find()
  if(!allProdcut){
    return res.json({
      sucess : false,
      messege : "Product not found!"
    })
  }
  else {
    res.json({
      sucess : true,
      messege : "All product!",
      prodcuts : allProdcut
    })
  }
  } catch (error) {
    res.json({
      sucess : false,
      messege : "Internal server erro!",
      error
    })
  }
}


// Controlller for sending data of perticuler prodcut 
const handleSpecificProductReq = async(req,res)=> {
  // getting product id form req's body 
  const {id} = req.body
  try {
  //  If prodcut id is invalid 
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.json({
        sucess : false,
        messege : "Invalid product ID format!",
      })
    }
    // finding product 
    const prodcutBasedOnId = await ProductModel.findOne({_id : id })
   if(!prodcutBasedOnId){
      return res.json({
        sucess : false,
        messege : "Product not found!",
      })
    }
    else {
      return res.json({
        sucess : true,
        messege : "Product found!",
        prodcut : prodcutBasedOnId
      })
    }
  } catch (error) {
    console.log(error)
    res.json({
      sucess : false,
      messege : "Internal server error!",
      error
    })
  }
}


module.exports = {
  handleAllProdcutReq ,
  handleSpecificProductReq
}