const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:String,
    password:String
})

const userModel =  mongoose.model('User',userSchema);
module.exports = userModel;