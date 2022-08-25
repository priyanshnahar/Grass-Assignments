const express = require("express");
const app = express();
const connectToDB = require("./db/index");
const UserModel = require("./models/User.model");

const PORT = 8000;

connectToDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Working");
});

app.post("/adduser", (request, response) => {
    // console.log(request.body);
    const {name, phone} = request.body;
    console.log(name, phone);

const userDetails = new UserModel({
    name: name,
    phone: phone, 
})

    userDetails.save((err) => {
        if(err) {
            response.send(err)
        } else {
            response.send('Data saved to mongoDB');
        }
    })
    // response.send("Please check your console",)
})


app.listen(PORT, function (){
    console.log("Server running on port", PORT);
});