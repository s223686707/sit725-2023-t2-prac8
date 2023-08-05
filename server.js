const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get('/', function (req,res) {
    res.render('index.html');
});

app.post('/order',(req,res)=>{
    const name = req.body.name
    const address = req.body.delivery_address
    const qty = req.body.quantity
    const phoneNumber = req.body.phone_number
    
    const orders = {
        name: name,
        delivery_address: address,
        quantity: qty,
        mobile_number: phoneNumber,
      }
    
    console.log(orders);  
    res.json(orders);


})


app.listen(3000, (req,res)=>{
    console.log("Server is running");
})