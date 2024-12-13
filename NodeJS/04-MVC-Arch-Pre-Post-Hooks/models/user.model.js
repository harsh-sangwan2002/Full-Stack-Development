const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    createdAt:Date,
    updatedAt:Date,
});

userSchema.pre("save",(next)=>{

    console.log("pre save hook is updating the date");
    
    const now = new Date();
    this.updatedAt = now;
    if(!this.createdAt){
        this.createdAt = now;
    }

    next();
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;