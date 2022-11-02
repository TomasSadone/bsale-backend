const query = require('../helpers/handleQuery');

const getCategories = (pool, callback) => {
  let req = 'SELECT * FROM category';
  //query takes a sql query, pool, and function to send the response
  query(req, pool, callback);
};

module.exports = { getCategories };
