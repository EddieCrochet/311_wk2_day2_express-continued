
//import in initial array of comments
let db = require("../data/comments");

let list = function(req, res){
    console.log("controller.comments.list");
    // code to return in response
    res.json(db);
}

let show = function(req, res){
    // code to return single comment by id
    // id will be path param

    let id = req.params.id;

    let found = db.find(function(el, index){
        if(el._id == id){
            return true;
        } else {
            return false;
        }
    });

    res.json(found);
}

let nextId = 5;
// creat, assign and id, and add to db array
// content of commetn will be inside request body
let create = function(req, res){
    // code to create new comment
    // and add to our 'db'

    console.log("controller.comments.create", req.body);

    let newComment = req.body;
    newComment._id = nextId;
    nextId++;
    db.push(newComment);
    res.sendStatus(204);
}

module.exports = {list, show, create};