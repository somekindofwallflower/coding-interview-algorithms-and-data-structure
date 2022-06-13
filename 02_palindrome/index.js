// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


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
