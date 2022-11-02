const express = require('express');
const { petitionHandler } = require('../helpers/petitionHandler');
const { getProductsBySearch } = require('../operations-pool');

// Create wrapper function that will allow router to use connection pool
const searchRouteWrapper = pool => {
  const router = express.Router();
  //handle every route inside this path with its pertinent controller
  router.route('/:id').get((req, res) => {
    petitionHandler(req, res, pool, getProductsBySearch);
  });
  return router;
};

module.exports = { searchRouteWrapper };
