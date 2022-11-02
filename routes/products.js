const express = require('express');
const { petitionHandler } = require('../helpers/petitionHandler');
const { getProducts } = require('../operations-pool');

// Create wrapper function that will allow router to use connection pool
const productsRouteWrapper = pool => {
  const router = express.Router();
  //handle every route inside this path with its pertinent controller
  router.route('/').get((req, res) => {
    petitionHandler(req, res, pool, getProducts);
  });
  return router;
};

module.exports = { productsRouteWrapper };
