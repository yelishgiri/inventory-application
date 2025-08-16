const db = require('../db/queries');

async function fetchAll(req, res){
    const products = await db.getAllProducts();
    const categories = await db.getAllCategories();
    res.render("home", { title:"Inventory Application" , products: products, categories: categories});
}




module.exports = {
    fetchAll
}

