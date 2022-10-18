const handleConnect = require("./helpers/handleConnect");

const query = (req, pool, callback) => {
  pool.query(req, (err, data) => {
    if (err) {
      console.error(err);
      handleConnect();
      return;
    }
    callback(data);
  });
};

const getCategories = (pool, callback) => {
  let req = "SELECT * FROM category";
  query(req, pool, callback);
};

const getProducts = (pool, callback) => {
  let req = "SELECT * FROM product";
  query(req, pool, callback);
};

const getProductsInCategory = (categoryId, pool, callback) => {
  let req = `SELECT * FROM product WHERE category in (${categoryId})`;
  query(req, pool, callback);
};

const getProductsBySearch = (search, pool, callback) => {
  let req = `SELECT * FROM product WHERE name LIKE '%${search}%';`;
  query(req, pool, callback);
};

module.exports = {
  getCategories,
  getProducts,
  getProductsBySearch,
  getProductsInCategory,
};
