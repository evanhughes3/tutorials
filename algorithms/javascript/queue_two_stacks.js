function Stack() {
  this.store = [];
}

Stack.prototype.peek = function() {
  return this.store[this.store.length - 1];
}

Stack.prototype.push = function(item) {
  this.store.push(item);
}

Stack.prototype.pop = function () {
  return this.store.pop();
}

Stack.prototype.isEmpty = function() {
  return this.store.length === 0;
}



function Queue() {
  this.stack1 = new Stack;
  this.stack2 = new Stack;
}

Queue.prototype.first = function() {
  this.moveToStack2();
  return this.stack2.peek();
}

Queue.prototype.last = function() {
  this.moveToStack1();
  return this.stack1.peek();
}

Queue.prototype.enqueue = function(item) {
  this.moveToStack1();
  this.stack1.push(item);
}

Queue.prototype.dequeue = function() {
  this.moveToStack2();
  return this.stack2.pop();
}

Queue.prototype.isEmpty = function() {
  if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
    return true;
  } else {
    return false;
  }
}

// Helpers...

Queue.prototype.moveToStack2 = function(){
  while (this.stack1.isEmpty() === false) {
    this.stack2.push(this.stack1.pop());
  }
}

Queue.prototype.moveToStack1 = function () {
  while (this.stack2.isEmpty() === false) {
    this.stack1.push(this.stack2.pop());
  }
}

var q = new Queue;
console.log(q.isEmpty() === true);

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.first() === 1);
console.log(q.last() === 3);
console.log(q.dequeue() === 1);
console.log(q.dequeue() === 2);
console.log(q.isEmpty() === false);
console.log(q.dequeue() === 3);
console.log(q.isEmpty() === true);