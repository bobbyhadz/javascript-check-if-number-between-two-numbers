// EXAMPLE 1 - Check if a Number is Between Two Numbers

const num = 50;

const low = 30;
const high = 150;

if (num > low && num < high) {
  // 👇️ this runs
  console.log('✅ num is between the two numbers');
} else {
  console.log('⛔️ num is NOT between the two numbers');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Making the ranges inclusive

// const num = 30;

// const low = 30;
// const high = 150;

// if (num >= low && num <= high) {
//   // 👇️ this runs
//   console.log('✅ num is between the two numbers');
// } else {
//   console.log('⛔️ num is NOT between the two numbers');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Creating a reusable function

// function numberInRange(num, low, high) {
//   if (num > low && num < high) {
//     return true;
//   }

//   return false;
// }

// console.log(numberInRange(5, 1, 10)); // 👉️ true

// console.log(numberInRange(50, 1, 10)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if a Number is between two numbers using `Math.max()` and `Math.min()`

// const num = 50;

// const low = 30;
// const high = 150;

// const max = Math.max(low, high);
// console.log(max); // 👉️ 150

// const min = Math.min(low, high);
// console.log(min); // 👉️ 30

// if (num > min && num < max) {
//   // 👇️ this runs
//   console.log('✅ num is between the two numbers');
// } else {
//   console.log('⛔️ num is NOT between the two numbers');
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Defining a reusable function

// function numberInRange(num, first, second) {
//   const max = Math.max(first, second);
//   const min = Math.min(first, second);

//   if (num > min && num < max) {
//     return true;
//   }

//   return false;
// }

// console.log(numberInRange(5, 10, 50)); // 👉️ false

// console.log(numberInRange(5, 1, 50)); // 👉️ true

// console.log(numberInRange(5, 50, 1)); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 6 - Including the lower and higher range

// const num = 30;

// const low = 30;
// const high = 150;

// if (num >= low && num <= high) {
//   // 👇️ this runs
//   console.log('✅ num is between the two numbers');
// } else {
//   console.log('⛔️ num is NOT between the two numbers');
// }

// ------------------------------------------------------------------

// // EXAMPLE 7 - Check if a Number is between two numbers using the ternary operator

// const num = 50;

// const low = 30;
// const high = 150;

// const inRange = num > low && num < high ? true : false;

// if (inRange) {
//   // 👇️ this runs
//   console.log('The number is in the specified range');
// } else {
//   console.log('The number is NOT in the specified range');
// }

// ------------------------------------------------------------------

// // EXAMPLE 8 - Check if a Number is between two numbers using `lodash`

// import _ from 'lodash';

// const num = 50;

// const low = 30;
// const high = 150;

// console.log(_.inRange(num, low, high)); // 👉️ true

// if (_.inRange(num, low, high)) {
//   // 👇️ this runs
//   console.log('The number is in the range');
// } else {
//   console.log('The number is NOT in the range');
// }
