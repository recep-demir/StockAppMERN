"use strict"
const { mongoose } = require('../configs/dbConnection')
const CustomError = require('../helpers/customError');
const passwordEncrypt = require('../helpers/passwordEncrypt')

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    },

    password: {
        type: String,
        trim: true,
        required: true,
        // set: ()=> 'encyrpte password'
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    },

    firstName: {
        type: String,
        trim: true,
        required: true,
    },

    lastName: {
        type: String,
        trim: true,
        required: true,
    },

    isActive: {
        type: Boolean,
        default: true
    },

    isStaff: {
        type: Boolean,
        default: false
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

}, {
    collection: 'users',
    timestamps: true
});

userSchema.pre(['save', 'findOneAndUpdate'], function (next) {
    const isEmailValidated = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email);
    const isPasswordValidated = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(this.password);

    if(isEmailValidated){
        if (isPasswordValidated){
            next()
        } else {
            next(new CustomError('Password is not validated', 400));
        };

        next()

    } else {
        next(new CustomError('Email is not validated', 400));
    }
})



module.exports = mongoose.model("User", userSchema);