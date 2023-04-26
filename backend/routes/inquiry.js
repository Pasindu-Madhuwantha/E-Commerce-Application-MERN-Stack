const express = require('express')
const router = express.Router();

const {getInquiries, newInquiry} = require('../controllers/inquiryController')

router.route('/inquiry').get(getInquiries);

router.route('/inquiry/new').post(newInquiry);

module.exports = router; 