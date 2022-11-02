const express = require('express');
const { petitionHandler } = require('../helpers/petitionHandler');
const { getProductsInCategory } = require('../operations-pool');

// Create wrapper function that will allow router to use connection pool
const categoryRouteWrapper = pool => {
  const router = express.Router();

  //handle every route inside this path with its pertinent controller
  router.route('/:id').get((req, res) => {
    petitionHandler(req, res, pool, getProductsInCategory);
  });
  return router;
};

module.exports = { categoryRouteWrapper };
