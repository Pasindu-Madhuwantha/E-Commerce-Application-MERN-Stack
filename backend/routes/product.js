const express =require('express')
const router = express.Router();

const{  getProducts, 
        newProduct, 
        getSingleProduct, 
        updateProduct, 
        deleteProduct} =require('../controllers/productController')

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/seller/product/new').post(newProduct);

router.route('/seller/product/:id').put(updateProduct).delete(deleteProduct);


module.exports =router;