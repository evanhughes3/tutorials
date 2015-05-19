Backbone.Model.prototype.idAttribute = '_id';

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
  url: 'http://localhost:3000/api/blogs'
});

// Instantiate 2 blogs

// var blog1 = new Blog({
//   author: "Evan Danger Hughes",
//   title: "Jazz Drummer, ya dig?",
//   url: "http://www.evanhughesmusic.com"
// });

// var blog2 = new Blog({
//   author: "Evan Hughes",
//   title: "Programmer?",
//   url: "http://www.evanhughesgithub.com"
// });

// // Instantiate a collection

var blogs = new Blogs();

// Backbone View for one blog

var BlogView = Backbone.View.extend({
  model: new Blog(),
  tagName: 'tr',
  initialize: function() {
    this.template = _.template($('.blogs-list-template').html());
  },
  events: {
    'click .edit-blog': 'edit',
    'click .update-blog': 'update',
    'click .cancel': 'cancel',
    'click .delete-blog': 'delete'
  },
  edit: function() {
    $('.edit-blog').hide();
    $('.delete-blog').hide();
    this.$('.update-blog').show();
    this.$('.cancel').show();

    var author = this.$('.author').html();
    var title = this.$('.title').html();
    var url = this.$('.url').html();

    this.$('.author').html('<input type="text" class="form-control author-update" value="' + author + '">');
    this.$('.title').html('<input type="text" class="form-control title-update" value="' + title + '">');
    this.$('.url').html('<input type="text" class="form-control url-update" value="' + url + '">');

  },
  update: function(){
    this.model.set({
      'author' : this.$('.author-update').val(),
      'title' : this.$('.title-update').val(),
      'url' : this.$('.url-update').val()
    });

    this.model.save(null, {
      success: function(response) {
        console.log("Successfully updated blog with _id: " + response.toJSON()._id);
      },
      error: function() {
        console.log("Failed to update blog");
      }
    });

  },
  cancel: function() {
    blogsView.render();
  },
  delete: function() {
    this.model.destroy({
      success: function(response) {
        console.log("Successfully deleted blog with _id: " + response.toJSON()._id);
      },
      error: function() {
        console.log('Failed to DELETE blog!');
      }
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

// Backbone view for all blogs

var BlogsView = Backbone.View.extend({
  model: blogs,
  el: $('.blogs-list'),
  initialize: function() {
    this.model.on('add', this.render, this);
    this.model.on('change', this.render, this);
    this.model.on('remove', this.render, this);

    this.model.fetch({
      success: function(response) {
        _.each(response.toJSON(), function(item) {
          console.log('Successfully got blog with _id: ' + item._id);
        });
      },
      error: function() {
        console.log("failed to get blogs");
      }
    });
  },
  render: function() {
    var self = this;
    this.$el.html('');
    _.each(this.model.toArray(), function(blog) {
      self.$el.append((new BlogView({ model: blog })).render().$el);
    });
    return this;
  }
});

var blogsView = new BlogsView();

$(document).ready(function() {

  $('.add-blog').click(function(){
    var blog = new Blog({
      author: $('.author-input').val(),
      title: $('.title-input').val(),
      url: $('.url-input').val()

    });
    $('.author-input').val('');
    $('.title-input').val('');
    $('.url-input').val('');
    blogs.add(blog);

    blog.save(null, {
      success: function(response) {
        console.log("Successfully saved blog with _id" + response.toJSON()._id);
      },
      error: function() {
        console.log("failed to save blog");
      }
    });
  });

});