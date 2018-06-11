const mongoose = require('mongoose');
const { Schema } = mongoose;

//build out poll schema

const pollSchema = new Schema ({
    question: {
        type: String,
        required: true,
        minlength: 10,
    },
    optOne: {
        type: {
            response: {type: String},
            score: {type: Number, default: 0}
        }
    },
    optTwo: {
        type: {
            response: {type: String},
            score: {type: Number, default: 0}
        }
    },
    optThree: {
        type: {
            response: {type: String},
            score: {type: Number, default: 0}
        }
    },
    optFour: {
        type: {
            response: {type: String},
            score: {type: Number, default: 0}
        }
    },
    //mistake here. score should be for each option
    // score: {
    //     type: Number,
    //     required: true,
    //     default: 0,
    // },
    createdBy: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Poll', pollSchema);