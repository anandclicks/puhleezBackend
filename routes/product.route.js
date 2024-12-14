const express = require("express")
const Router = express.Router()

// Impoting controller for controlling routes request 
const prodcutController = require("../controllers/product.controller")

// Handling request and sending to controllers 
Router.get('/allProducts',prodcutController.handleAllProdcutReq)
Router.post('/specificPorduct', prodcutController.handleSpecificProductReq)

module.exports = Router