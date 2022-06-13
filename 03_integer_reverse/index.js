// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Tips to solve the problem
// - Convert number to string by using toString function
// - Check if it is a sign number or not by using Math.sign() function.
// - Convert string to number by using parseInt method

function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');
    return parseInt(reversed) * Math.sign(n);
}


module.exports = reverseInt;
