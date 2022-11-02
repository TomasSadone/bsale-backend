const express = require('express');
const { getProductsInCategory } = require('../controllers/categoryController');
const { handlePetition } = require('../helpers/handlePetition');

//wrapper function that will allow router to use connection pool
const categoryRouteWrapper = pool => {
  const router = express.Router();
  //handlePetition takes req,res, pool, and the controller for each route.
  //it passes the means to the controller to send the response
  router.route('/:id').get((req, res) => {
    handlePetition(req, res, pool, getProductsInCategory);
  });
  //must return router
  return router;
};

module.exports = { categoryRouteWrapper };
