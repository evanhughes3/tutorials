// Backbone model

var Blog = Backbone.Model.extend({
  defaults: {
    author: '',
    title: '',
    url: ''
  }
});

// Backbone collection

var Blogs = Backbone.Collection.extend({

});

// Instantiate 2 blogs

var blog1 = new Blog({
  author: "Evan Danger Hughes",
  title: "Jazz Drummer, ya dig?",
  url: "http://www.evanhughesmusic.com"
})

var blog2 = new Blog({
  author: "Evan Hughes",
  title: "Programmer?",
  url: "http://www.evanhughesgithub.com"
})

// Instantiate a collection

var blogs = new Blogs([blog1, blog2])