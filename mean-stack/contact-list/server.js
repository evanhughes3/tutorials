var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist'])

app.use(express.static(__dirname + "/public"));

app.get('/contactList', function(request, response){
  console.log("I receeived a GET request");

    person1 = {
      name: 'Evan',
      email: 'Evan@evan.com',
      number: '111-111-1111'
    }

    person2 = {
      name: 'Grace',
      email: 'grace@grace.com',
      number: '222-222-2222'
    }

    person3 = {
      name: 'John',
      email: 'john@john.com',
      number: '333-333-3333'
    }

    var contactList = [person1, person2, person3]

    response.json(contactList);
  });

app.listen(3000);
console.log("Server running on port 3000")