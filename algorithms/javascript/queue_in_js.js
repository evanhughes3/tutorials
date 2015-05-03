// Implement a Queue
// First In First Out (FIFO)

function Queue() {
  this.store = [];
}

Queue.prototype.first = function() {
  return this.store[0];
}

Queue.prototype.last = function() {
  return this.store[this.store.length - 1];
}

Queue.prototype.enqueue = function(item) {
  return this.store.push(item);
}

Queue.prototype.dequeue = function() {
  return this.store.shift();
}

Queue.prototype.isEmpty = function() {
  return this.store.length === 0;
}

var q = new Queue;
console.log(q.isEmpty() === true);
q.enqueue("Evan");
q.enqueue("Grace");
console.log(q.isEmpty() === false);
console.log(q.first() === "Evan");
console.log(q.last() === "Grace");
console.log(q.dequeue() === "Evan");