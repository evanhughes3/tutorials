var app = app || {};

$(document).ready(function() {
  $( '#releaseDate' ).datepicker();
  new app.LibraryView();

});