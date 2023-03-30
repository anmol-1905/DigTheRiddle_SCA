const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    teamId: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    loginCount: {
        type: Number,
        default:0
    }, 
    token: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);