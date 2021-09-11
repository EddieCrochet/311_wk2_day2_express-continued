// import db of vehicles
let db = require('../data/vehicles');

// function to list all vehicles in db
let list = (req, res) => {
    console.log("Controllers.vehicles.list");

    //return response with db
    res.json(db);
}

// function to show one vehicle by id
let show = (req, res) => {
    console.log("Nothing at all, huh?")
    console.log("controllers.vehicles.show");
    // store id into vAR FROM REQ
    let id = req.params.id;

    // find vehicle that matches that id
    let found = null;
    found = db.find( vehicle => vehicle._id == id);

    // return that vehicle in json object
    res.json(found);
}

// function to create new vehicle
let newId = 21;
let create = (req, res) => {
    console.log("controllers.vehicles.create", req.body);
    let newVehicle = req.body;
    newVehicle._id = newId;
    newVehicle.year = req.body.year;
    newVehicle.make = req.body.make;
    newVehicle.model = req.body.model;
    newId++;
    db.push(newVehicle);
    res.sendStatus(202);
}

module.exports = { list, show, create };