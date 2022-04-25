// 'use strict';

// // const person = {
// //   age: 42
// // }

// // const change = (per) => {
// //   let second = JSON.parse(JSON.stringify(per))
// //   // per.age = 1;
// //   second.age = 3
// // }

// // console.log(person.age)
// // change(person)
// // console.log(person.age)

// // const upperFirstWord = (str) => {
// //   const [first, ...others] = str.split(' ');
// //   console.log(first, others)
// // }

// // upperFirstWord('hola chau adios')

// // const greet = (greeting) => {
// //   return (name) => {
// //     console.log(`${greeting} ${name}`)
// //   }
// // }

// // // const greaterHey = greet('hey')
// // // greaterHey('nico')

// // greet('hola')('nico')

// // const tax = (rate) => {
// //   return (value) => value + value * rate
// // }

// // console.log(tax(0.2)(100))

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀
// */

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const userInput = parseInt(
//       prompt(`
//     ${this.question}`)
//     );
//     this.answers[userInput]++;
//     this.displayResults()
//     this.displayResults('string')
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers)
//     } else {
//       console.log(`Poll results are ${this.answers[0]} ${this.answers[1]} ${this.answers[2]} ${this.answers[3]}`)
//     }
//   }
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function() {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`)
//   }
// }

// let book = secureBooking()
// book()
// book()
// book()

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', () => {header.style.color = 'blue';})
})();
