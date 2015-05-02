// Write the function #has_matching_parens that takes a string as an argument and returns true if the string has valid parenthesis.

// ex.
// str = “(I(really)love (al(g)or)ithms)” has_matching_parens(str) #=> true

// Bonus: How would you solve if there were [], (), and {}?

// Input: String
// Output: Boolean

// Steps:
  // 1. Split string into single character items in an array
  // 2. Create counter variable and set it to 0
  // 3. Iterate over array, and add 1 for every open parens, subtract 1 for every closed parens
  // 4. If counter is 0, return true, else return false

function hasMatchingParens(string) {

  var splitString = string.split(''), counter = 0;

  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i] === '(') {
      counter++;
    } else if (splitString[i] === ')') {
      counter --;
    }
  };

  return counter === 0;
}

console.log(hasMatchingParens("Hello There()") === true);
console.log(hasMatchingParens("LALA(()") === false)

