// Implement a Queue
// Okay to use Array methods
// First In First Out (FIFO)

// function Queue() {
//   this.store = [];
// }

// Queue.prototype.first = function() {
//   return this.store[0];
// }

// Queue.prototype.last = function() {
//   return this.store[this.store.length - 1];
// }

// Queue.prototype.enqueue = function(item) {
//   return this.store.push(item);
// }

// Queue.prototype.dequeue = function() {
//   return this.store.shift();
// }

// Queue.prototype.isEmpty = function() {
//   return this.store.length === 0;
// }

// var q = new Queue;
// console.log(q.isEmpty() === true);
// q.enqueue("Evan");
// q.enqueue("Grace");
// console.log(q.isEmpty() === false);
// console.log(q.first() === "Evan");
// console.log(q.last() === "Grace");
// console.log(q.dequeue() === "Evan");


// Implement a Queue without using array methods

function Node(data) {
  this.next = null;

  if (data === undefined) {
    this.data = null;
  } else {
    this.data = data;
  }
}

function Queue() {
  this.head = null;
  this.tail = null;
}

Queue.prototype.first = function() {
  return this.head;
}

Queue.prototype.last = function() {
  return this.tail;
}

Queue.prototype.enqueue = function(node) {
  if (this.isEmpty()) {
    this.head = node;
  } else {
    this.tail.next = node;
  }
  this.tail = node;
}

Queue.prototype.dequeue = function() {

  var returnItem = this.head;

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next
  }
  return returnItem;
}

Queue.prototype.isEmpty = function() {
  if (this.tail) {
    return false;
  } else {
    return true;
  }
}

var q = new Queue;
var osman = new Node("Osman");
var james = new Node("James");
var matilda = new Node("Matilda");

console.log(q.isEmpty() === true);
q.enqueue(osman);
q.enqueue(james);
console.log(q.first().data === osman.data);
console.log(q.last().data === james.data);
q.dequeue();
console.log(q.first().data === james.data);
console.log(q.last().data === james.data);
q.enqueue(matilda)
console.log(q.first().data === james.data);
console.log(q.last().data === matilda.data);
q.dequeue();
console.log(q.isEmpty() === false);
q.dequeue();
console.log(q.isEmpty() === true);