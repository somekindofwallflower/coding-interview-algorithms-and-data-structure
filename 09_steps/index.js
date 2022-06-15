// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 1
// function steps(n) {
//     if(n === 1) {
//         console.log("#");
//     } else {
//         for(let s = 1; s <= n; s++) {
//             console.log('#'.repeat(s) + ' '.repeat(n - s))
//
//         }
//     }
// }

// Solution 2

// function steps(n) {
//     for(let row = 0; row < n; row++) {
//         let stair = "";
//
//         for (let column = 0; column < n; column ++) {
//             if(column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

function steps(n, row = 0, stair= '') {
   if (n === row) {
       return;
   }
   if(n === stair.length) {
      console.log(stair);
      return steps(n, row + 1);
   } else {
       if(stair.length <= row) {
           stair += '#'
       } else {
           stair += ' '
       }
       return steps(n, row, stair);
   }
}

module.exports = steps;
