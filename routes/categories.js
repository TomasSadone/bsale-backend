const express = require('express');
const { getCategories } = require('../controllers/categoriesController');
const { handlePetition } = require('../helpers/handlePetition');

//wrapper function that will allow router to use connection pool
const categoriesRouteWrapper = pool => {
  const router = express.Router();
  //handlePetition takes req,res, pool, and the controller for each route.
  //it passes the means to the controller to send the response
  router.route('/').get((req, res) => {
    handlePetition(req, res, pool, getCategories);
  });
  //must return router
  return router;
};

module.exports = { categoriesRouteWrapper };
