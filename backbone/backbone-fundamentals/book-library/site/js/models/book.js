var app = app || {};

app.Book = Backbone.Model.extend({
  defaults: {
    coverImage: 'img/placeholder.png',
    title: 'No title yet',
    author: 'No author yet',
    releaseDate: 'No release date yet',
    keywords: 'None'
  }
});