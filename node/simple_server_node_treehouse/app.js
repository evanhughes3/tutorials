var router = require("./router.js")
// Problem: Simple way to look at a users badge count and javascript points from a web browser

// Solution: Use Node.js to perform the profile lookups and serve our templates via http

// 1. Create a web server

var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');