const express = require('express');
const app = express();
const DB = require('./db/index');
const foodModel = require('./model/food.model')
const PORT = 8000;


DB()

app.use(express.json());

// routes post api :- to send the data 
app.post('/food', async function (req, res){
    console.log(req.body);
    const food =  new foodModel(req.body);   
     
    try {
        await food.save();
        res.status(200).send("Data saves --->");
    } catch (error) {
        res.send(error.message);
    }
})

// routes get api :- to retrive the data 
app.get('/food', async function (req, res){
    // {} -> the meaning od this brace means it will find all the data that us available.
    const foods = await foodModel.find({});
    try {
        res.send(foods);
    } catch (error) {
        res.send(error);  
    }
    
})
// routes put api :- to PASS data 
app.put("/food/:id", async function (req, res){
    try {
        await foodModel.findByIdAndUpdate(req.params.id, req.body);
        res.send("Data updated....!");
      } catch (error) {
        res.send(error.message);
      }

});

// routes delete api :- to delete the data 
app.delete('/food/id:', async function (req, res){
        try {
            const food = await foodModel.findByIdAndDelete(req.param.id);
            res.send("data deleted");
        } catch (error) {
            res.send(error.message);
            
        }
})
app.listen(PORT, console.log('server listening on port' + PORT));

