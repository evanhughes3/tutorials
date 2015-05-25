var application_root = __dirname,
express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
mongoose = require('mongoose');

var app = express();

app.use(express.static(path.join(application_root, 'site')));
app.use(bodyParser());

var port = 4711;

app.listen( port, function() {
  console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});

app.get( '/api', function( request, response ) {
  response.send( 'Library API is running' );
});

//Connect to database
mongoose.connect( 'mongodb://localhost/library_database' );

//Schemas
var Book = new mongoose.Schema({
  title: String,
  author: String,
  releaseDate: Date
});

//Models
var BookModel = mongoose.model( 'Book', Book );

// Configure server
app.configure( function() {
  //parses request body and populates request.body
  app.use( express.bodyParser() );

  //checks request.body for HTTP method overrides
  app.use( express.methodOverride() );

  //perform route lookup based on url and HTTP method
  app.use( app.router );

  //Where to serve static content
  app.use( express.static( path.join( application_root, 'site') ) );

  //Show all errors in development
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/api/books', function(request,response) {
  return BookModel.find(function(err, books){
    if (!err) {
      return response.send(books);
    } else
      return console.log(err);
  });
});

app.post( '/api/books', function( request, response ) {
    var book = new BookModel({
        title: request.body.title,
        author: request.body.author,
        releaseDate: request.body.releaseDate
    });

    return book.save( function( err ) {
        if( !err ) {
            console.log( 'created' );
            return response.send( book );
            } else {
                console.log( err );
            }
    });
});

app.get('/api/books/:id', function(request, response){
  return BookModel.findById(request.params.id, function(err, book){
    if (!err) {
      return response.send(book);
    } else {
      return console.log(err);
    }
  });
});