function reverse(string) {
  var new_string = ""
  for (var i = string.length - 1; i >= 0; i--) {
    new_string += string[i]
  };
  return new_string
}

function reverse(string) {
  var reversed_array = [];
  for (var i = string.length - 1, j = 0; i >= 0; i--, j++) {
    reversed_array[j] = string[i];
  };
  return reversed_array.join('');
}

function reverse(string) {
  var reversed_array = [];
  for (var i = 0, length = string.length; i <= length; i++) {
    reversed_array.push(string.charAt(length - i));
  };
  return reversed_array.join('');
}

function reverse(string) {
  return string.split('').reverse().join('');
}

function reverse(string) {
  var i = string.length
  var new_string = '';

  while (i > 0 ) {
    new_string += string.substring(i -1, i);
    i--;
  }
  return new_string;
}

function reverse(string) {
  for (var i = string.length - 1, new_string = ''; i >= 0; new_string += string[i--]) {}
  return new_string;
}

function reverse(string) {
  return (string === '' ) ? '' : reverse(string.substring(1)) + string.charAt(0);
}


console.log(reverse("evan") === "nave");
console.log(reverse("grace") === "ecarg");
console.log(reverse("hannah") === "hannah");