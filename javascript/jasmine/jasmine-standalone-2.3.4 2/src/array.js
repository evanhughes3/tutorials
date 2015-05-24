function insertionSort(items) {

  var value;

  for (var i = 0; i < items.length; i++) {
    value = items[i];
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      items[j+1] = items[j];
    }
    items[j+1] = value;
  }
  return items;
}
