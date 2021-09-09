const express = require('express');

// make a variable to hold the routes that the app will respond to
const router = express.Router();

// the controller holds functions and callbacks and responds to requests
 const controller = require('../controllers/contacts');

 /***
 * /GET contacts
 * /GET contacts/:id
 * /POST contacts
 */


//start adding routes and which controller will respond to them
//route to fetch all contacts
router.get("./contacts", controller.list);

// route to fetch one contact by id
router.get("./contacts/:id", controller.show);

// route to create a new contact
router.put("./contacts", controller.create);

// must export the router
module.exports = router;