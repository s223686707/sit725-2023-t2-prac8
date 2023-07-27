const express = require('express');
const fs = require('fs');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('', (req,res)=>{
    res.send(__dirname+"/index.html");
});

app.post('/calculate', (req,res)=>{
    let num1 = Number(req.body.firstNumber);
    let num2 = Number(req.body.secondNumber);
    let options = String(req.body.options);
    let result;

    switch(options){
        case 'add':
            result = num1 + num2;
            break;

        case 'multiply':
            result = num1 * num2;
            break;
        
        case 'subtract':
            result = num1 - num2;
            break;
        
        case 'divide':
            result = num1 / num2;
            break;    
            
        default:
            result = 0;    
    }

    const filePath = path.join(__dirname, '/public/output.html');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err){
            console.log(err);
        }else{
            const finalOutput = data.replace('__RESULT__', result);
            res.send(finalOutput);
        }
    });

});


app.listen(3000, (req,res)=>{
    console.log("Server is running");
})