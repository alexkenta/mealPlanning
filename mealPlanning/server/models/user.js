const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const validator = require('validator')

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator(value) {
                return validator.isEmail(value);
            }
        }
    },
    password: {
        type: String,
        required: true,        
    },
    mon: {type: Object, default: null},
    tues: {type: Object, default: null},
    wed: {type: Object, default: null},
    thurs: {type: Object, default: null},
    fri: {type: Object, default: null},
    sat: {type: Object, default: null},
    sun: {type: Object, default: null},

}, {timestamps: true})

userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });

//if password has not been modified, we move on
userSchema.pre('save', function(next){

    if(!this.isModified('password')) return next();

    bcrypt.hash(this.password, 10)
        .then(hashedPassword => {
            console.log("password", this.password);
            console.log("hashed", hashedPassword);
            this.password = hashedPassword;
            next();
        })
        .catch(next)
})
//statics method - can access through the class w/out creating instance
// userSchema.statics.validatePassword = function(candidatePassword, hashedPassword){
//     return bcrypt.compare(candidatePassword, hashedPassword);
// };

module.exports = mongoose.model('User', userSchema);

