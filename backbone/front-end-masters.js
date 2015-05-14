Prototypal Inheritance and Extension

var BookModel = Backbone.Model.extend({...})

var book = new BookModel({
  title: "Good Dog Carl",
  author: "JR Simmons"
});

var BiographyModel = BookModel.extend({...})
var NovellaModel = BookModel.extend({...})



Constructor / Initailize

var View = Backbone.View.extend({
  initialize: function({
    console.log("Hello World");
  })
});

var view = new View();
  // => "Hello World"


var CommentModel = Backbone.Model.extend({
  constructor: function({
    this.author = new UserModel();
    Backbone.Model.apply(this, arguments);
  })
});


Event System - built in

Backbone.on('authenticated', function (argument) {
  console.log("The user is logged in.");
});

Backbone.trigger('authenticated');
// => "The user is logged in"
