// import the initial array of contacts
let db = require("../data/contacts");

// function to list all contacts
 let list = (req, res) => {
    console.log("controller.contacts.list");
    res.json(db);
 }

 //function to list one contact by id
 let show = (req, res) => {
    console.log("controller.contacts.show");
    
    // save id from req into variable
    let id = req.params.id;

    // find the one that matches that id
    let found = null;
    found = db.find(contact => contact._id == id);

    res.json(found);
 }

 let nextId = 6;
 let create = (req, res) => {
     console.log("controller.contacts.create", req.body);

     let newContact = req.body;
     newContact._id = nextId;
     newContact.name = req.body.name;
     newContact.occupation = req.body.occupation;
     newContact.avatar = req.body.avatar;
     nextId++;
     db.push(newContact);
     res.sendStatus(204);
 }

 module.exports = { list, show, create};