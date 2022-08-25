const mongoose = require("mongoose");

const MONGO_DB_URL = 'mongodb+srv://priyansh:12345@cluster0.qdxxq9k.mongodb.net/?retryWrites=true&w=majority'
const connectToDB = async () => {
   mongoose.connect(MONGO_DB_URL,(err) => {
    if (err) throw err;
    console.log("Connected to MongoDB Database");
   });
};

module.exports = connectToDB;
