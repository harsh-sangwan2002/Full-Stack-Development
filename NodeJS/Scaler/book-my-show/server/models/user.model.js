const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'partner'],
        default: 'user',
    }
})

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;