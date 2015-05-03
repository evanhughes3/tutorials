// duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate (numsArray) {
  var newArray = [];
  for (var i = 0; i < numsArray.length; i++) {
    newArray.push(numsArray[i])
  };
  for (var i = 0; i < numsArray.length; i++) {
    newArray.push(numsArray[i])
  };
  console.log(newArray)
  return newArray;
}

function duplicate (numsArray) {
  var newArray = numsArray
  return newArray.concat(numsArray);
}



// test

function checkDuplicate(test, correct) {
  if (test.length !== correct.length) {
    return false
  }

  for (var i = 0; i < test.length; i++) {
    if (test[i] != correct[i]){
      return false;
    }
  };
  return true;
}

var test = duplicate([1,2,3,4,5]);
var correct = [1,2,3,4,5,1,2,3,4,5];
console.log(checkDuplicate(test, correct));
