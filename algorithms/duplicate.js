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



console.log(duplicate([1,2,3,4,5]) === [1,2,3,4,5,1,2,3,4,5])