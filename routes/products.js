const express = require('express');
const { getProducts } = require('../controllers/productsController');
const { handlePetition } = require('../helpers/handlePetition');

// Create wrapper function that will allow router to use connection pool
const productsRouteWrapper = pool => {
  const router = express.Router();
  router.route('/').get((req, res) => {
    //handlePetition takes req,res, pool, and the controller for each route.
    //it passes the means to the controller to send the response
    handlePetition(req, res, pool, get1Products);
  });
  //must return router
  return router;
};

module.exports = { productsRouteWrapper };
