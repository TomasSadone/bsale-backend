const query = require('../helpers/handleQuery');

const getProductsBySearch = (search, pool, callback) => {
  //escaping the user input to avoid sql injection
  let string = `%${search}%`;
  let req = 'SELECT * FROM product WHERE name LIKE ' + pool.escape(string);
  //query takes a sql query, pool, and function to send the response
  query(req, pool, callback);
};

module.exports = { getProductsBySearch };
