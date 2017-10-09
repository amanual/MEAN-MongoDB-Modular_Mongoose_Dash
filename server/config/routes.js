var animals = require('../controllers/animals.js');
module.exports = function(app){
app.get('/', function (req, res) {   
        animals.show(req, res);
 })

// Adding an Animal

app.post('/animal/new', function (req, res) {
   animals.create(req, res)
})
app.get('/animal/edit/:id', function (req, res) {
    animals.find(req, res)
})
app.post('/animal/post/:id', function (req, res) {
    animals.update(req, res)
})
app.get('/animal/destroy/:id', function (req, res) {
    animals.destroy(req, res)
})
}