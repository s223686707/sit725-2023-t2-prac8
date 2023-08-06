const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.h6nrkl7.mongodb.net/?retryWrites=true&w=majority";
const bodyParser = require('body-parser');
let collections;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function runMongoConnection() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    collections = client.db().collection('Sections');
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(err) {
    console.log(err);
  }
}


app.get('/', function (req,res) {
    res.render('index.html');
});

app.get('/getItems', (req, res) => {
    getAllItems((err, result) => {
        if (!err){
            res.json({statusCode:200, data:result, message: 'Get All items Successfully!!'});
        }
    });
});

app.post('/order', (req,res)=>{

    const title = req.body.title;
    const image = req.body.image;
    const subTitle = req.body.subtitle;
    const description = req.body.description;

    let newFood = {
        title: title,
        image: image,
        subTitle: subTitle,
        description: description
    }
    
    insertItem(newFood);

});

function getAllItems(callback){
    collections.find({}).toArray(callback);
}

function insertItem(newFood){
    collections.insertOne(newFood, (err, result) => {
        if(err){
            console.error("Error in Inserting Item in DB", err);
        }else{
            console.log("Inserted into DB Successfully!!");
        }
    });
}


app.listen(3000, (req,res)=>{
    console.log("Server is running");
    runMongoConnection().catch(console.dir);
});