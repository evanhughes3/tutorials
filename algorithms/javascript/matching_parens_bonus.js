function Stack() {
  this.store = [];
}

Stack.prototype.peek = function() {
  return this.store[this.store.length - 1];
}

Stack.prototype.pop = function() {
  return this.store.pop();
}

Stack.prototype.push = function(item) {
  return this.store.push(item);
}

Stack.prototype.isEmpty = function() {
  return this.store.length === 0;
}

function hasMatchingParens(string) {

  var parens = new Stack;
  var splitString = string.split('');

  for (var i = 0; i < splitString.length; i++) {
    if (hasOpenParen(splitString[i])) {
      parens.push(splitString[i]);
    } else if (hasClosedParen(splitString[i])) {
      if (!checkForMatchingParens(parens.pop(),splitString[i])) {
        return false;
      }
    }
  };

  return parens.isEmpty();

}

function hasOpenParen(char) {
  var check = ['(', '{', '['];
  for (var i = 0; i < check.length; i++) {
    if (check[i] === char) {
      return true;
    }
  };
  return false;
}

function hasClosedParen(char) {
  var check = [')', '}', ']'];
  for (var i = 0; i < check.length; i++) {
    if (check[i] === char) {
      return true;
    }
  };
  return false;
}

function checkForMatchingParens (open, close) {
  if(open === '(' && close === ')') {
    return true;
  } else if (open === '{' && close === '}') {
    return true;
  } else if (open === '[' && close === ']') {
    return true;
  } else {
    return false
  }
}


console.log(hasMatchingParens("(Hello) My {name} is [Evan]"))
console.log(hasMatchingParens("(Hello) My {name} is [Evan]("))
console.log(hasMatchingParens("{(([()]))}"));