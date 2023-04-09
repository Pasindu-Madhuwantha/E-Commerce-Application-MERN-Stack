import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://api-test.dhl.com/track/shipments',
    params: { trackingNumber: '00340434292135100186' }, // Replace with actual tracking number
    headers: { 'DHL-API-Key': '7Fq2mfm1XacmrFsIlxWfGDZZG98dvGwI' }, // Replace with actual API key
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

//

const Order = require('../models/order');
const Product = require('../models/product');
const axios = require('axios');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Create a new order   =>  /api/v1/order/new
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const {
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo

    } = req.body;

    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user._id
    })

    res.status(200).json({
        success: true,
        order
    })
})


// Get single order   =>   /api/v1/order/:id
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if (!order) {
        return next(new ErrorHandler('No Order found with this ID', 404))
    }

    res.status(200).json({
        success: true,
        order
    })
})

// Get logged in user orders   =>   /api/v1/orders/me
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find({ user: req.user.id })

    res.status(200).json({
        success: true,
        orders
    })
})


// Get all orders - ADMIN  =>   /api/v1/admin/orders/
exports.allOrders = catchAsyncErrors(async (req, res, next) => {
    const sellerId = req.user.id; // Assuming you are using Passport.js for authentication and user data is stored in req.user
    const orders = await Order.find({ "orderItems.product": { "$in": await Product.find({ user: sellerId }, { _id: 1 }) } });

    let totalAmount = 0;

    orders.forEach(order => {
        totalAmount += order.totalPrice
    })

    res.status(200).json({
        success: true,
        totalAmount,
        orders
    })
})

 

// Define a function to generate a tracking number
const generateTrackingNumber = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://api-test.dhl.com/track/shipments',
        params: { trackingNumber: '00340434292135100186' }, // Replace with actual tracking number
        headers: { 'DHL-API-Key': '7Fq2mfm1XacmrFsIlxWfGDZZG98dvGwI' }, // Replace with actual API key
      };
  
      const response = await axios.request(options);
  
      // Extract the tracking number from the response
      const trackingNumber = response.data.shipmentInfo.trackingNumber;
  
      return trackingNumber;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to generate tracking number');
    }
  };
  
  // Function to send email
  const sendEmail = async (to, subject, message) => {
    try {
      const response = await fetch('https://api.example.com/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + API_KEY
        },
        body: JSON.stringify({
          to,
          subject,
          message
        })
      })
      const data = await response.json()
      return data.status
    } catch (error) {
      console.error(error)
    }
  }
  







// Update / Process order - ADMIN  =>   /api/v1/admin/order/:id
const axios = require('axios');

exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id)

    if (order.orderStatus === 'Delivered') {
        return next(new ErrorHandler('You have already delivered this order', 400))
    }

    order.orderItems.forEach(async item => {
        await updateStock(item.product, item.quantity)
    })

    if (req.body.status === 'Shipped') {
        // Call 3rd party API to generate tracking number
        const trackingNumber = await generateTrackingNumber();

        // Update order tracking number in database
        order.trackingNumber = trackingNumber;
        
        // Send email to customer
        const email = order.shippingInfo.email;
        const message = `Your order has been shipped. Your tracking number is ${trackingNumber}.`;
        await sendEmail(email, message);
    }

    order.orderStatus = req.body.status,
    order.deliveredAt = Date.now()

    await order.save()

    res.status(200).json({
        success: true,
    })
})

async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.stock = product.stock - quantity;

    await product.save({ validateBeforeSave: false })
}

// Delete order   =>   /api/v1/admin/order/:id
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id)

    if (!order) {
        return next(new ErrorHandler('No Order found with this ID', 404))
    }

    await order.remove()

    res.status(200).json({
        success: true
    })
})