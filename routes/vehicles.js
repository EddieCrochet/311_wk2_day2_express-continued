// import express
const express = require('express');

// create router from express module
const router = express.Router();

// set a controller to hold callback functions
const controller = require('../controllers/vehicles');

 /***
 * /GET vehicles
 * /GET vehicles/:id
 * /POST vehicles
 */

// route to get list of all vehicles
router.get('/vehicles', controller.list);

// route to get one vehicle by id
router.get('/vehicles/:id', controller.show);

// route to create new vehicle and add to list
router.post('/vehicles', controller.create);

module.exports = router;