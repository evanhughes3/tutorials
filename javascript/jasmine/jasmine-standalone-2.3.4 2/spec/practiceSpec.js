describe('function insertionSort()', function() {
    var unsortedArray = [4,6,1,3,8,9];
    var sortedArray = [1,3,4,6,8,9];
  it('should return a sorted array', function() {
    expect(insertionSort(unsortedArray)).toEqual(sortedArray);
  });
});