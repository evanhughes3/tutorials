// Write a function that checks if one string is the same string, just permutated over.
// For example "abcd" and "cdab"

function checkForPermutations(str1, str2) {
  var firstLetter = str1[0];
  var testStr = '';

  if (str1.length !== str2.length) {
    return false;
  }

  for (var i = 0; i < str2.length; i++) {
    if (str2[i] === firstLetter) {
      for (var j = i; j < str2.length; j++) {
        testStr += str2[j]
      };
    }
  };

  for (var i = 0; i < str2.length; i++) {
    if (str2[i] === firstLetter) {
      break;
    } else {
      testStr += str2[i]
    }
  };

  if (str1 === testStr) {
    return true;
  } else {
    return false;
  }

}

console.log(checkForPermutations("abcd", "cdab") === true);
console.log(checkForPermutations("abcd", "acdb") === false);