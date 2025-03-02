const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    username: {type : String , required : true},
    userImage : {type: String , required:true},
    blog: {type:String , required:true}
})
