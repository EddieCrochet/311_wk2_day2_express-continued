const express = require("express");

// this holds routes that app responds to
const router = express.Router();

// this conroller holds functions, callbacks of how to handle req when they come in
const controller = require("../controllers/comments");

/***
 * /GET comments
 * /GET comments/:id
 * /POST comments
 */


//start adding routes and which controller will respond to them
//route to fetch all comments
router.get("/comments", controller.list);

// route to fetch one comment by id
router.get("/comments/:id", controller.show);

// route to create new comment
router.post("/comments", controller.create);

// do not forget to export the router so the app can use it
module.exports = router;