// Reverse all letters of a word in a string, keeping the order the same.
// "hello there sir" === "olleh ereht ris"

function reverseWords (sentence) {
  var split_words = sentence.split(' ');
  var new_string = [];
  for (var i = 0; i < split_words.length; i++) {
    for (var j = split_words[i].length - 1; j >= 0; j--) {
      new_string.push(split_words[i][j])
    };
    new_string.push(" ");
  };
 return new_string.join('').trim();
}

console.log(reverseWords("hello there sir") === "olleh ereht ris")




// Reverse order of words, but not words themselves.
// "hello there sir" === "sir there hello"

function reverseWords (sentence) {
  var split_words = sentence.split(' ');
  var new_string = '';
  for (var i = split_words.length - 1; i >= 0; i--) {
    new_string += split_words[i] + " "
  };
  return new_string.trim();
}

console.log(reverseWords("hello there sir") === "sir there hello");




// Reverse all letters of a word in a string, reversing the order as well.
// "hello there sir" === "ris ereht olleh"

function reverseWords(sentence) {
  var new_string = '';
  for (var i = sentence.length - 1; i >= 0; i--) {
    new_string += sentence[i];
  };
  return new_string;
}


// console.log(reverseWords("hello there sir") === "ris ereht olleh")

// using the .reverse() method...

function reverseWords (sentence) {
  var split_sentence = sentence.split(' ');
  return split_sentence.reverse().join(' ');
}

console.log(reverseWords("hello there sir") === "sir there hello");
