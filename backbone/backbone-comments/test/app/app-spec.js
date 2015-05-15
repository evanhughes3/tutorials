define(function(require, exports, module){

  var assert = chai.assert;
  var App = require('app');
  var CommentsCollection = require('collections/comments');

  describe('Application View', function(){

    it('it exists', function(){
      assert.ok(App);
    });

    describe('.initialize', function(){
      context('creates depenecies', function(){
        before(function(){
          this.app = new App();
        });

        it('creates a persona model', function(){
          assert.ok( this.app.persona );
        });

        it('creates a comments collection', function(){
          assert.ok( this.app.collection );
        });
      });

      context('attaches event handlers', function(){

        before(function(){
          this.stub = sinon.stub(App.prototype, 'listenTo');
          this.app = new App();
        });

        after(function(){
          this.stub.restore();
        });

        it('listens to collection `add`', function(){
          assert.ok( this.stub.calledWith( this.app.collection, 'add', this.app.renderComment ) );
        });

        it('listens to collection `add remove`', function(){
          assert.ok( this.stub.calledWith( this.app.collection, 'add remove', this.app.renderCommentCount ) );
        });

        it('listens to persona `sync`', function(){
          assert.ok( this.stub.calledWith( this.app.persona, 'sync', this.app.renderPersona ) );
        });
      });

      it('calls collection .fetch', function(){
        var spy = sinon.spy(CommentsCollection.prototype, 'fetch');
        var app = new App();

        assert.ok( spy.called );

        spy.restore();
      });

    });

    describe('.createComment', function(){
      beforeEach(function(){
        this.app = new App();
        this.stub = sinon.stub(this.app.collection, 'create');
      });

      afterEach(function(){
        this.stub.restore();
      });

      it('calls event.preventDefault', function(){
        var event = { preventDefault: sinon.stub() };
        this.app.createComment( event );
        assert.ok( event.preventDefault.called );
      });

      it('calls collection.create', function(){
        var event = { preventDefault: sinon.stub() };
        this.app.createComment( event );

        assert.ok( this.stub.called );
      });
    });

  });

});
