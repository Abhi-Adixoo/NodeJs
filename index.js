// REST API for CRUD using MongoDb,Express,NodeJs(MEN)


const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/productDB';
const app = express()

mongoose.connect(url);

const dbConnection = mongoose.connection;

// check connection
dbConnection.on('open',()=> {
    console.log('Connected to MongoDB!');
});

app.use(express.json())

const productRouter=require('./routes/product');

app.use('/product',productRouter)

app.listen(9000, ()=>{
    console.log ('Server Started');
})
