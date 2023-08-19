let collection = require('../models/foodItems');

const saveFoodOrder = (req, res) => {
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
    
    collection.insertItem(newFood);
}

const getFoodOrder = (req, res) => {
    collection.getAllItems((err, result) => {
        if (!err){
            res.json({statusCode:200, data:result, message: 'Get All items Successfully!!'});
        }
    });
}

module.exports = {saveFoodOrder, getFoodOrder};