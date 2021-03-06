const express = require("express");
const path = require('path');
const fs = require('fs');
const mongoose = require("mongoose");

//create schema here
mongoose.connect("mongodb://localhost/new_animals");
// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
});