const query = require('../helpers/handleQuery');

const getProductsInCategory = (categoryId, pool, callback) => {
  //escaping the user input to avoid sql injection
  let req = 'SELECT * FROM product WHERE category = ' + pool.escape(categoryId);
  //query takes a sql query, pool, and function to send the response
  //response takes place there
  query(req, pool, callback);
};

module.exports = { getProductsInCategory };
