const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeSchema = new Schema ({
    name: {
        type: String,
        required: true,
        minlength: [3, "recipe name must be at least 3 characters"]
    },
    difficulty: {
        type: Number,
        required: [true, "please choose a difficulty"]
    },
    ingredients: {
        type: Array,
        required: true,
    },
    method: {
        type: Array,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Recipe', RecipeSchema);