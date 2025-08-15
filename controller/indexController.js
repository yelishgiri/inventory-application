const db = require('../db/queries');

async function fetchAllProducts(req, res){
    const products = await db.getAllProducts();
    res.render("index", { title:"Inventory Application" , products: products});
}

module.exports = {
    fetchAllProducts
}