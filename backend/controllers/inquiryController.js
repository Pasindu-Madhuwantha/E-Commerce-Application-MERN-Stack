const Inquiry = require('../models/inquiry')
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');

//create new inquiry => /api/v1/inquiry/new
exports.newInquiry = catchAsyncErrors (async(req, res, next) => {

    const inquiry = await Inquiry.create(req.body);

    res.status(201).json({
        success: true,
        inquiry
    })
})

//get all inquiries => /api/v1/inquiry
exports.getInquiries = catchAsyncErrors (async(req, res, next) => {

    const inquiries = await Inquiry.find();

    res.status(200).json({
        success: true,
        count: inquiries.length,
        inquiries
    })
})