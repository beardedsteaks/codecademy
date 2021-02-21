/*This script file is the main script for the Mixed Messages project.

Goal:  When runing the script it will generate and return a random message

1. Setup main function & Test file setup.
2. A method for generating random numbers
3. Use random numbers to pull values from message bank
4. Compile message components into a string
5. Print/Return random message
*/


function generateRandomMessage () {

    let a = getRandomInt(1, 5);
    let b = getRandomInt(1, 12);
    let c = getRandomInt(1, 5);

    let phrase = getPhrase(a, b, c);

    console.log(`Here is your productivity prompt to get started:`);
    return phrase;

};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
}
//console.log(`Test message`);
console.log(generateRandomMessage());

/* Projected Output:
 *
 * Here is your productivity prompt to get your day started:
 *
 * Today is a good day to go to the beach for yourself.
 * */

function getPhrase (startnum, tasknum, focusnum) {
  const starter = {
      1: `Today is not a good day to `,
      2: `Today is a good day to `,
      3: `Next week would be better to `,
      4: `Tomorrow might be a better day to `,
      5: `You may want to wait until next week to `,

  };

  const task = {
      1: `plan a trip `,
      2: `get a workout in `,
      3: `go for a run `,
      4: `catch up on sleep `,
      5: `go to the beach `,
      6: `cross some items off of your to-do list `,
      7: `get your shopping done `,
      8: `make a budget `,
      9: `clean your place `,
      10: `run those errands `,
      11: `read a book `,
      12: `study a new language `,

  };

  const focus = {

      1: `for yourself.`,
      2: `for work.`,
      3: `with your family.`,
      4: `with a friend.`,
      5: `with a group of friends.`,

  };

  let partA = starter[startnum];
  let partB = task[tasknum];
  let partC = focus[focusnum];

  return `${partA}${partB}${partC}`;

};
