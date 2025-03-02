const mongoose = require('mongoose');

const dotenv = require('dotenv')
dotenv.config();
const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zetsr.mongodb.net/${process.env.DB_NAME}`;

mongoose.connect(MONGO_URI).then(()=>{
    console.log("Mongo db connected");
}).catch((err)=>{
    console.log("Mongo db connection error : ",err);
})




