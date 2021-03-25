const mongoose = require('mongoose');
const {Schema}= mongoose; //= const Schema = mongoose.Schema;

//schema create it to make it require this id
const userSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false   
    }
}, {timestamps: true });

//tell mongoose that we want to add a new collection called users
const User = mongoose.model('users', userSchema);

module.exports = User;