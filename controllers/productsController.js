const query = require('../helpers/handleQuery');

const getProducts = (pool, callback) => {
  let req = 'SELECT * FROM product';
  //query takes a sql query, pool, and function to send the response
  query(req, pool, callback);
};
module.exports = { getProducts };
