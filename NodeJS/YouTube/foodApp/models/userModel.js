const mongoose = require('mongoose');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
        min: 8,
        validate: function () {
            return emailValidator.validate(this.email);
        }
    },
    confirmPassword: {
        required: true,
        type: String,
        min: 8,
        validate: function () {
            return this.confirmPassword === this.password;
        }
    }
})

// Before the save event occurs
userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt();
    const hashedString = await bcrypt.hash(this.password, salt);
    this.password = hashedString;
    this.confirmPassword = undefined;
})

// After the save event occurs
userSchema.post('save', function (doc) {
    this.confirmPassword = undefined;
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;