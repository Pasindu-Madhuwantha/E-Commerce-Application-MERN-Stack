const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');




//*first // Register a user   => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {

  

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id:'avatars/975315_a9hush' ,
            url: 'https://res.cloudinary.com/do0lwpqg2/image/upload/v1678301545/avatars/975315_a9hush.jpg'
        }
    })

    
    const token = user.getJwtToken();

    res.status(201).json({
        success: true,
        token
    })


})

