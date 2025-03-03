const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

app.use(cors());
app.use(express.json());
app.set("view engine" , "ejs");
app.set("views" ,path.join(__dirname, "views"));

const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zetsr.mongodb.net/${process.env.DB_NAME}`;

mongoose.connect(MONGO_URI , {useNewUrlParser : true , useUnifiedTopology : true})
.then(() =>{ console.log("MongoDB Connected"); })
.catch((err)=>{ console.log(err); })

//Index Route
app.get("/blogs" , (req,res)=>{
    
})


app.listen(process.env.PORT, () => {
    console.log("server has started " , process.env.PORT);
})

app.get("/" , (req,res) => {
    res.send("on home page");
})






