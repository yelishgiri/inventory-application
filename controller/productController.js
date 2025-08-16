const db = require('../db/queries');

async function addAProductGet(req,res) {
    const categories = await db.getAllCategories()
    res.render('product/addProduct', { title:"Add Product", categories: categories});
}

async function addAProductPost(req,res) {
    const { product_name, product_description, product_image_url, category_id} = req.body;
    await db.addNewProduct(product_name, product_description, product_image_url, category_id);
    res.redirect('/');
}

async function deleteProduct(req,res){
    await db.deleteProductById(req.params.id);
    res.redirect("/");
}

async function updateProductPost(req, res) {
    const {product_name, product_description} = req.body;
    await db.updateProductById(req.params.id, product_name, product_description);
    res.redirect('/');
}

async function updateProductGet(req,res){
    const product  = await db.getProductById(req.params.id);

    res.render('product/updateProduct', {title: "Update Product", product: product});
}


async function fetchProductInfo(req, res) {
    const product = await db.getProductById(req.params.id);
    res.render("product/product", { product: product});
}

module.exports = {
addAProductGet,
addAProductPost,
deleteProduct,
updateProductPost,
updateProductGet,
fetchProductInfo
}