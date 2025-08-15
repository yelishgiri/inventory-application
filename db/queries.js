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

module.exports = {
  getAllCategories,
  getAllProducts,
  searchProducts,
  getProductsByCategory,
  addNewCategory,
  addNewProduct,
};
