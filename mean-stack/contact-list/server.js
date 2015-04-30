var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(request, response){
  console.log("I receeived a GET request");

  db.contactlist.find(function(err, docs) {
    console.log(docs);
    response.json(docs)
  })


  });

app.post('/contactlist', function(request, response){
  console.log(request.body)
  db.contactlist.insert(request.body, function(err, doc){
    response.json(doc)
  })
});

app.delete('/contactlist/:id', function(request, response){
  var id = request.params.id;
  console.log(id);
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    response.json(doc);
  })
})

app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
    res.json(doc)
  })
})

app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.contactlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});
});

app.listen(3000);
console.log("Server running on port 3000")