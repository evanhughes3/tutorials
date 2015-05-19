var app = {};

app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

app.TodoList = Backbone.Collection.extend({
  model: app.Todo,
  localStorage: new Store('backbone-todo')
});

app.todolist = new app.TodoList();

app.TodoView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#item-template').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

// var view = new app.TodoView({model: todo});

app.AppView = Backbone.View.extend({
  el: '#todoapp',
  initialize: function() {
    this.input = this.$('#new-todo');
    app.todolist.on('add', this.addOne, this);
    app.todolist.on('reset', this.addAll, this);
    app.todolist.fetch();
  },

  events: {
    'keypress #new-todo' : 'createTodoOnEnter'
  },

  createTodoOnEnter: function(key) {
    if (key.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
      return;
    }
    app.todolist.create(this.newAttributes());
    this.input.val('');
  },

  addOne: function(todo) {
    var view = new app.TodoView({model: todo});
    $('#todo-list').append(view.render().el);
  },

  addAll: function() {
    this.$('#todo-list').html('');
    app.todolist.each(this.addOne, this);
  },

  newAttributes: function() {
    return {
      title: this.input.val().trim(),
      completed: false
    };
  }
});

app.appview = new app.AppView();