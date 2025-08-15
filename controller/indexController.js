const db = require('../db/queries');

async function fetchAllProducts(req, res){
    const products = await db.getAllProducts();
    res.render("index", { title:"Inventory Application" , products: products});
}

async function fetchProductInfo(req, res) {
    const product = await db.searchProductsById(req.params.id);
    res.render("productInfo", { products: product});
}

async function updateCategory(req,res) {
    const {category_name, category_description} = req.body;
    await db.updateCategoryById(req.params.id, category_name, category_description);
    res.redirect('/');
}

async function updateProduct(req, res) {
    const {product_name, product_description} = req.body;
    await db.updateProductById(req.params.id, product_name, product_description);
    res.redirect('/');
}

async function deleteProduct(req,res){
    await db.deleteProductById(req.params.id);
    res.redirect("/");
}

async function deleteCategory(req,res) {
    await db.deleteCategoryById(req.params.id);
    res.redirect('/');
}

module.exports = {
    fetchAllProducts,
    fetchProductInfo,
    deleteProduct,
    deleteCategory,
    updateCategory,
    updateProduct
}