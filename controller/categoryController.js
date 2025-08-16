const db = require('../db/queries');

async function fetchCategoryInfo(req,res) {
    const products = await db.getProductsByCategory(req.params.id);
    const category = await db.getCategoryById(req.params.id);
    res.render("category/category", {products: products, category: category});
}

async function updateCategoryGet(req,res){
    const category = await db.getCategoryById(req.params.id);
    res.render('category/updateCategory', {title: "Update Category", category: category});
}

async function updateCategoryPost(req,res) {
    const {category_name, category_description} = req.body;
    await db.updateCategoryById(req.params.id, category_name, category_description);
    res.redirect('/');
}

async function deleteCategory(req,res) {
    await db.deleteCategoryById(req.params.id);
    res.redirect('/');
}

async function addACategoryGet(req,res){
    res.render('category/addCategory', { title: "Add Category"});
}

async function addACategoryPost(req, res) {
    const { category_name, category_description, category_image_url} = req.body;
    await db.addNewCategory(category_name, category_description, category_image_url);
    res.redirect('/');
}


module.exports = {
    fetchCategoryInfo,
    updateCategoryGet,
    updateCategoryPost,
    deleteCategory,
    addACategoryGet,
    addACategoryPost
}