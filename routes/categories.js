const express = require('express');
const { petitionHandler } = require('../helpers/petitionHandler');
const { getCategories } = require('../operations-pool');

// Create wrapper function that will allow router to use connection pool
const categoriesRouteWrapper = pool => {
  const router = express.Router();
  //handle every route inside this path with its pertinent controller
  router.route('/').get((req, res) => {
    petitionHandler(req, res, pool, getCategories);
  });
  return router;
};

module.exports = { categoriesRouteWrapper };
