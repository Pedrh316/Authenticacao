const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        max:30,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        min:8,
        max:30,
    }
})

module.exports = mongoose.model('user', userSchema);