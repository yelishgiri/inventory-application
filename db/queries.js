const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM Categories");
  return rows;
}

async function getAllProducts() {
  const { rows } = await pool.query("SELECT * FROM Products");
  return rows;
}

async function searchProducts(search) {
  const query = (search ?? "").trim();

  const { rows } = await pool.query(
    `
    SELECT * FROM Products WHERE to_tsvector('english', coalesce(product_name, '') || ' ' || coalesce(product_description, '')) @@ plainto_tsquery('english', $1)`,
    [query]
  );
  return rows;
}

async function searchProductsById(id) {
  const { rows } = await pool.query('SELECT * FROM Products WHERE product_id = $1',[id]);
  return rows;
}

async function getProductsByCategory(category_id) {
  const { rows } = await pool.query(
    "SELECT * FROM Products WHERE category_id=$1",
    [category_id]
  );
  return rows;
}

async function addNewCategory(name, description, image_url) {
  await pool.query(
    `
        INSERT INTO Categories (category_name, category_description, category_image_url) VALUES ($1, $2, $3)`,
    [name, description, image_url]
  );
}

async function addNewProduct(name, description, image_url, category_id) {
  await pool.query(
    `INSERT INTO Products (product_name, product_description, product_image_url, category_id) VALUES ($1, $2, $3, $4)`,
    [name, description, image_url, category_id]
  );
}

async function deleteProductById(id){
    await pool.query('DELETE FROM Products WHERE product_id = $1', [id]);
}

async function deleteCategoryById(id){
    await pool.query('DELETE FROM Categories WHERE category_id = $1', [id]);
}

async function updateProductById(id, name, description){
    await pool.query (`UPDATE Products SET product_name = $1, product_description = $2 WHERE product_id = $3`, [name,description, id]);
}

async function updateCategoryById(id, name, description){
    await pool.query (`UPDATE Categories SET category_name = $1, category_description = $2 WHERE category_id = $3`, [name,description, id]);
}


module.exports = {
  getAllCategories,
  getAllProducts,
  searchProducts,
  getProductsByCategory,
  addNewCategory,
  addNewProduct,
  searchProductsById,
  deleteProductById,
  deleteCategoryById,
  updateCategoryById,
  updateProductById
};
