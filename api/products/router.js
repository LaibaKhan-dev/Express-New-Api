const app = require('express');
const router = app.Router();
const { getAllProducts, postProducts, getProduct, getBrandById, getBrand, postBrands,postCategories, getProductByCategory, getCategoryByName, getCategoryById, getProductByBrand, getProductById, updateProduct, updateCategoryById, updateBrandById, deleteProductById, deleteProductsByCategory, deleteProductsByBrand } = require('./controller');

router.get('/allproducts', getAllProducts);
router.post('/products', postProducts);
router.get('/getproduct', getProduct);
router.get('/getbrand', getBrand);
router.post('/brands', postBrands);
router.post('/categories', postCategories);
router.get('/getproductbycategory', getProductByCategory);
router.get('/getcategorybyname', getCategoryByName);
router.get('/getcategorybyid', getCategoryById);
router.get('/getproductbybrand', getProductByBrand);
router.get('/getproductbyid', getProductById);
router.get('/getbrandbyid', getBrandById);
router.put('/updateproduct/:id', updateProduct);
router.put('/updatecategory/:id', updateCategoryById);
router.put('/updatebrand/:id', updateBrandById); 
router.delete('/deleteproduct/:_id', deleteProductById);
router.delete('/deleteproductsbycategory', deleteProductsByCategory);
router.delete('/deleteproductsbybrand', deleteProductsByBrand);

module.exports = router;