define(function(require, exports, module){

  var assert = chai.assert;
  var CommentView = require('views/comment-view');

  describe('CommentView', function(){
  
    it('it exists', function(){
      assert.ok(CommentView);
    });

    describe('.initialize', function(){
      it('should throw an error if not passed a model', function(){
        assert.throws(function(){
          new CommentView();
        }, /must provide a Comment model/);
      });
    });

  });

});

