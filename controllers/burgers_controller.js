// import express 
var express = require("express"); 

var router = express.Router(); 

// import burger.js 
var burger = require("../models/burger.js"); 

// create the router for the app 
router.get("/", function(req, res){
    burger.all(function(data){

    })
})

// export the router at the end of the file 
module.exports = router; 