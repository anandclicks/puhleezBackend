const express = require("express")
const path = require("path")
const dotenv = require("dotenv").config()
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')


// Middleware for serving images 
const connectDB = require("./models/dbconnection")
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use('/images',express.static(path.join(__dirname,'images')))
app.use(cors({
  origin : process.env.FRONTEND_DOMAIN,
  credentials : true
}))

// Importing Routes handler 
const ProdcutRoute = require('./routes/product.route')

// Forwording route to controller 
app.use('/prodcut',ProdcutRoute)


// Running server on PORT 
const runserver = async()=> {
 await connectDB().then(()=> console.log("Databse has connected!"));
  app.listen(process.env.PORT,()=> console.log("Server is runnung at", process.env.PORT))
}
runserver()
