const db = require('../db/queries');

async function fetchAllProducts(req, res){
    const products = await db.getAllProducts();
    res.render("index", { title:"Inventory Application" , products: products});
}

async function fetchProductInfo(req, res) {
    const product = await db.getProductById(req.params.id);
    res.render("productInfo", { product: product});
}

async function updateCategoryGet(req,res){
    const category  = db.getCategoryById(req.params.id);
    res.render('updateCategory', {title: "Update Category", category: category});
}

async function updateProductGet(req,res){
    const product  = await db.getProductById(req.params.id);

    res.render('updateProduct', {title: "Update Product", product: product});
}

async function updateCategoryPost(req,res) {
    const {category_name, category_description} = req.body;
    await db.updateCategoryById(req.params.id, category_name, category_description);
    res.redirect('/');
}

async function updateProductPost(req, res) {
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

async function addAProductGet(req,res) {
    res.render('addProduct');
}

async function addACategoryGet(req,res){
    res.render('addCategory');
}

async function addAProductPost(req,res) {
    const { product_name, product_description, product_image_url, category_id} = req.body;
    await db.addNewProduct(product_name, product_description, product_image_url, category_id);
    res.redirect('/');
}

async function addACategoryPost(req, res) {
    const { category_name, category_description, category_image_url} = req.body;
    await db.addNewCategory(category_name, category_description, category_image_url);
    redirect('/');
}

module.exports = {
    fetchAllProducts,
    fetchProductInfo,
    deleteProduct,
    deleteCategory,
    updateCategoryPost,
    updateProductPost,
    addAProductPost,
    addACategoryPost,
    addAProductGet,
    addACategoryGet,
    updateCategoryGet,
    updateCategoryPost,
    updateProductGet
}

