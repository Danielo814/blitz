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
  let chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      //   console.log(last);
      chunked.push([element]);
    } else {
      last.push(element);
    }
    // console.log(chunked);
    // console.log(last);
  }
  return chunked;
}

chunk([2, 3, 4, 5, 6, 7, 8], 3);

// module.exports = chunk;

const arr = [[2]];
const lastar = arr[0];
lastar.push(2);
console.log(arr);
