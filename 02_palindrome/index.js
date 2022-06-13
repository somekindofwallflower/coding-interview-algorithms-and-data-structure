
// Solution 1
// Reverse the string and store the result in an variable than compare string to the reversed value
// function palindrome(str) {
//     // const reverseStr = str.split("").reduce((rev, char) =>  char + rev, "");
//     const reverseStr = str.split("").reverse().join("");
//     return reverseStr === str;
// }

// Solution 2
function palindrome(str) {
    return str.split('').every((char, i, arr) => char === arr[arr.length - i - 1])
}
module.exports = palindrome;
