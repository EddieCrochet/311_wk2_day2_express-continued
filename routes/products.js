// import express
const express = require('express');

// store express router in to variable to use
const router = express.Router();

// set up controller to hold callbacks
const controller = require('../controllers/products');


 /***
 * /GET products
 * /GET products/:id
 * /POST products
 */

// route to get list of products
router.get('/products', controller.list);

// route to get one product by ID
router.get('/products/:id', controller.show);

// route to create a product and add to our list
router.post('/products', controller.create);

module.exports = router;