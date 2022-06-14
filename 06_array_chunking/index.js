// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Steps
// Create empty array to hold chunks called 'chunked'
// Loop through each  element in the unchanked array
// Retrieve the last element in the chunked
// If element does not exist or the element length is equal to chunk size push e new chunk to the chunked array with the element
// Else add the element into the chunk


// Solution 1
// function chunk(array, size) {
//   let chunked = [];
//   for (let element of array) {
//       const last = chunked[chunked.length - 1]
//       if(!last || last.length === size) {
//           chunked.push([element])
//       } else {
//           last.push(element);
//       }
//   }
//     return chunked;
// }


// Steps
// Create an empty chunk array
// Create 'index' starts at 0
// While index is less than array.length
// Push a slice of length size from array into chunked
// Add size to index

// Solution 2
function chunk(array, size) {
    let chunked = [];
    let index = 0;
    for (let el of array) {
        if(index < array.length) {
            chunked.push(array.slice(index, index + size))
            index =  index + size;
        }
    }
    return chunked;
}


module.exports = chunk;
