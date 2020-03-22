// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let index = 0;
  let retArr = [];
  let windows = [];
  for (let i = 0; i < array.length; i++) {
    if (index < size) {
      windows.push(array[i]);
      index = index + 1;
    } else {
      retArr.push(windows);
      index = 0;
      windows = [];
    }
  }
  return retArr;
}

module.exports = chunk;
