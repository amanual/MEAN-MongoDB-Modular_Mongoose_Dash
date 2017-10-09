const mongoose = require("mongoose");
var Animal = mongoose.model('Animal')

module.exports = {
show: function (req, res) {
    Animal.find({}, function (err, animals) {
        if (err) {
            console.log("Something wrong with finding animals!");
        }
        res.render('index', { animals });
    })
},
// Adding an Animal

create: function (req, res) {
    var animal = new Animal({ name: req.body.name });
    animal.save(function (err) {
        if (err) {
            console.log("Something went wrong");
        }
        else {
            console.log("Successfully added a user!");
            res.redirect("/")
        }
    })
},
find: function (req, res) {
    Animal.findOne({ _id: req.params.id }, function (err, animals) {
        console.log(animals)
        if (err) {
            console.log("Something wrong with your first edit route!");
        }
        res.render('edit', { animals: animals });
    })
},
update: function (req, res) {
    Animal.update({ _id: req.params.id }, { $set: { name: req.body.name } }, function (err) {
        if (err) {
            console.log("Somehting wrong with deleting!");
        }
        res.redirect('/')
    })
},
destroy: function (req, res) {    
    Animal.remove({ _id: req.params.id }, function (err) {
        if (err) {
            console.log("Somehting wrong with deleting!");
        }
        res.redirect('/')
    })

}
}