const handleConnect = require('./helpers/handleConnect');

const query = (req, pool, callback) => {
  pool.query(req, (err, data, fields) => {
    if (err) {
      console.error(err);
      handleConnect();
      return;
    }
    console.log(fields);
    callback(data);
  });
};

const getCategories = (pool, callback) => {
  let req = 'SELECT * FROM category';
  query(req, pool, callback);
};

const getProducts = (pool, callback) => {
  let req = 'SELECT * FROM product';
  query(req, pool, callback);
};

const getProductsInCategory = (categoryId, pool, callback) => {
  let req = 'SELECT * FROM product WHERE category = ' + pool.escape(categoryId);
  query(req, pool, callback);
};

const getProductsBySearch = (search, pool, callback) => {
  let string = `%${search}%`;
  let req = 'SELECT * FROM product WHERE name LIKE ' + pool.escape(string);
  query(req, pool, callback);
};

module.exports = {
  getCategories,
  getProducts,
  getProductsBySearch,
  getProductsInCategory,
};
