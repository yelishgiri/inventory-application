const db = require('../db/queries');

async function fetchAllProducts(req, res){
    const products = await db.getAllProducts();
    res.render("index", { title:"Inventory Application" , products: products});
}

async function fetchProductInfo(req, res) {
    const product = await db.searchProductsById(req.params.id);
    res.render("productInfo", { products: product});
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
    deleteCategory
}