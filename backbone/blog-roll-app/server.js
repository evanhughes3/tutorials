var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/blogroll');

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  author: String,
  title: String,
  url: String
});

mongoose.model('Blog', BlogSchema);

var Blog = mongoose.model('Blog');

// var blog = new Blog({
//   author: "Evan",
//   title: "Evan's Blog",
//   url: "www.evansblog.com"
// });

// blog.save();

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// ROUTES

app.get('/api/blogs', function(request, response) {
  Blog.find(function(err, docs) {
    docs.forEach(function(item) {
      console.log("received a get request for _id" + item._id);
    })
    response.send(docs);
  })
})

app.post('/api/blogs', function(request, response) {
  console.log("received a post request");
  for (var key in request.body) {
    console.log(key + ": " + request.body[key]);
  }
  var blog = new Blog(request.body);
  blog.save(function(err, doc) {
    response.send(doc);
  });
});

var port = 3000;

app.listen(port);
console.log("server on port " + port)