var app = {};

app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },
  toggle: function() {
    this.save({ completed: !this.get('completed')});
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
    this.input = this.$('.edit');
    return this;
  },
  initialize: function(){
    this.model.on('change', this.render, this);
    this.model.on('remove', this.remove, this);
  },
  events: {
    'dblclick label' : 'edit',
    'keypress .edit' : 'updateOnEnter',
    'blur .edit' : 'close',
    'click .toggle' : 'toggleCompleted',
    'click .destroy' : 'destroy'
  },
  edit: function() {
    this.$el.addClass('editing');
    this.input.focus();
  },
  close: function(){
    var value = this.input.val().trim();
    if (value) {
      this.model.save({ title: value });
    }
    this.$el.removeClass('editing');
  },
  updateOnEnter: function(event){
    if (event.which === 13) {
      this.close();
    }
  },
  toggleCompleted: function() {
    this.model.toggle();
  },
  destroy: function(){
    this.model.destroy();
  }
});

// var view = new app.TodoView({model: todo});

app.AppView = Backbone.View.extend({
  el:'#todoapp',
  initialize: function() {
    this.input = this.$('#new-todo');
    app.todolist.on('add', this.addOne, this);
    app.todolist.on('reset', this.addAll, this);
    app.todolist.fetch();
  },
  events: {
    'keypress #new-todo': 'createTodoOnEnter'
  },
  createTodoOnEnter: function(e){
    if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
     return;
  }
    app.todolist.create(this.newAttributes());
    this.input.val(''); // clean input box
  },
  addOne: function(todo){
    var view = new app.TodoView({ model: todo });
    $('#todo-list').append(view.render().el);
  },
  addAll: function() {
    this.$('#todo-list').html('');
    app.todolist.each(this.addOne, this);
  },
  newAttributes: function(){
    return {
      title: this.input.val().trim(),
      completed: false
    };
  }
});

app.appview = new app.AppView();