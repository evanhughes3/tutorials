define([
  'test/app-spec',
  'test/views/comment-view-spec'
],function(){
  if( window.mochaPhantomJS ){
    window.mochaPhantomJS.run();
  } else {
    window.mocha.run();
  }
});
