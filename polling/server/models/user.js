const mongoose = require('mongoose');
const { Schema } = mongoose;

//build out user schema

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);