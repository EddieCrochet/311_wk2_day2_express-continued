// import the array of products
const products = require('../data/products');
let db = require('../data/products');

// function to list all products
let list = (req, res) => {
    console.log('controllers/products/list');

    // send db list as response
    res.json(db);
};

// function to list one product by ID
let show = (req, res) => {
    console.log('controllers.products.show');

    // store id from req into local variable
    let id = req.params.id;

    // find product that matches given id from req
    let found = null;
    found = db.find(product => product._id == id);

    res.json(found);
}

// function to create new product
let newID = 11;
let create = (req, res) => {
    let newProduct = req.body;
    newProduct._id = newID;
    newProduct.name = req.body.name;
    newProduct.description = req.body.description;
    db.push(newProduct);
    res.sendStatus(202);
}

module.exports = { list, show, create };