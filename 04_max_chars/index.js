// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Tips: Convert string to object where the keys are the character and values is the number of times the character has been found

function maxChar(str) {
    // Generate object from string
    const charMap = {};
    let max = 0;
    let maxChar = "";
    for(let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    for (let char in charMap) {
        if(charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
   return maxChar;
}

module.exports = maxChar;
