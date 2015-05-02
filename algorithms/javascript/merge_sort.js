// Implement a merge sort on an array.

// Merge sort is considered a “divide and conquer” sorting algorithm. Write a recursive method that utilizes merge sort.

// Conceptually, a merge sort works as follows:

// Divide the unsorted list into n sub-lists, each containing 1 element (a list of 1 element is considered sorted). (base case?)

// Repeatedly merge sub-lists to produce new, sorted sub-lists until there is only 1 sub-list remaining. This will be the sorted list.



// Input: Unsorted array
// Output: Sorted array

// Steps:
//  1. Find middle point of array
//  2. Divide array into left and right arrays
//  3. Continue recursively until base case(when array is 1 item because 1 item is sorted)
//  4.


function mergeSort(items) {
  // Base case, if array is 1 or 0
  if (items.length < 2) {
    return items
  }

  var mid = Math.floor(items.length/2);
  var left = items.slice(0,mid);
  var right = items.slice(mid);

  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
  var sorted = [];
  var il = 0;
  var ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      sorted.push(left[il++]);
    } else {
      sorted.push(right[ir++]);
    }
  }
  return sorted.concat(left.slice(il)).concat(right.slice(ir))
}

function compareArrays(test, correct) {
  if (test.length !== correct.length) {
    return false;
  } else {
    for (var i = 0; i < correct.length; i++) {
      if (test[i] !== correct[i]) {
        return false
      }
    };
  }
  return true
}

var test = mergeSort([1,9,6,4])

console.log(compareArrays(test, [1,4,6,9]));