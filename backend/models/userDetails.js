const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique : true
    },
    password:{
        type:String,
        required:true
    }
})

const UserDetailsModel = mongoose.model('users' , detailsSchema);
module.exports = UserDetailsModel;


