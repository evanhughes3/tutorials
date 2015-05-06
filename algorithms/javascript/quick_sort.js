function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((left+right)/2)],
      i = left,
      j = right;

      while (i <= j) {
        while(items[i] < pivot) {
          i++;
        }

        while(items[j] < pivot) {
          j++;
        }

        if (i <= j) {
          swap(items,i,j);
          i++;
          j++;
        }
      }
      return i
}