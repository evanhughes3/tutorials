// Binary search

function binarySearch (items, target) {
  var items = items.sort(),
      min = 0,
      max = items.length - 1,
      mid = Math.floor(min+max/2),
      element = items[mid],
      counter = 0;

  while (min <= max) {
    if (target < element) {
      max = mid;
      mid = Math.floor(min+max/2);
      element = items[mid];
      counter += 1;
    } else if (target > element) {
      min = mid;
      mid = Math.floor(min+max/2);
      element = items[mid]
      counter += 1
    } else if (target === element) {
      return element + " was found, it took " + counter + " tries to get there";
    } else {
      return "That element was not found";
    }
  }
}


var nums = [2,5,1,7,9]

console.log(binarySearch(nums, 5))
