function insertionSort(items) {

  var value;

  for (var i = 0; i < items.length; i++) {
    value = items[i];
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      items[j+1] = items[j];
    };
    items[j+1] = value;
  };
  return items;
}


function checkInsertionSort(test, correct) {
  if (test.length !== correct.length) {
    return false;
  }

  for (var i = 0; i < test.length; i++) {
    if (test[i] !== correct[i]) {
      return false;
    }
  };
  return true;
}



// tests
var test = insertionSort([4,7,8,3])
var correct = [3,4,7,8]

console.log(checkInsertionSort(test, correct));