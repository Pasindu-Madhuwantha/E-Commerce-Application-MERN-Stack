const mongoose = require('mongoose')

const inquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
    },
    mobileNumber: {
        type: String,
        required: [true, 'Please enter your mobile number'],
    },
    inquiry: {
        type: String,
        required: [true, 'Please enter inquiry'],
    },
    status: {
        type: String,
        required: true,
        default: 'Not Replied'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Inquiry', inquirySchema);