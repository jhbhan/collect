const mongoose = require('mongoose');
const {Schema}= mongoose; //= const Schema = mongoose.Schema;

//schema create it to make it require this id
const linkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    userId: {
        type: String,
    }
}, {timestamps: true });

//tell mongoose that we want to add a new collection called users
const Link = mongoose.model('links', linkSchema);

module.exports = Link;