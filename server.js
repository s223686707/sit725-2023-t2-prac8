const express = require('express');
require('./mongoConnection');
let router = require('./routes/foodItemRouter');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use('/api/foodItems', router)

app.listen(3000, (req,res)=>{
    console.log("Server is running");
});