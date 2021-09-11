// importing express
const express = require("express");

//store expres into variable
const app = express();

// allows us to parse our responses into json
app.use(express.json());

// middleware for static files
app.use(express.static("./public"));

// add routes for the comments and tell app to use it
let comRoutes = require("./routes/comments");
app.use(comRoutes);

//add routes for the contacts and tell app to use it
let contactRoutes = require("./routes/contacts");
app.use(contactRoutes);

// add routes for the products and tell app to use it
let prodRoutes = require('./routes/products');
app.use(prodRoutes);

// add routes for the vehicles and tell app to use it
let vehicleRoutes = require('./routes/vehicles');
app.use(vehicleRoutes);

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
