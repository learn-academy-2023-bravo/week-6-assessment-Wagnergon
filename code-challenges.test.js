// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("objectToSentences", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  
  test("should take in an array of objects and return a sentence with their name capitalized", () => {
    expect(objectToSentences(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Psuedocode 
// We need to take in an object extract the name and occupation values and return them in a string
// Set up a function taking people as the paramater 
// use map to create a new array of sentences 
// access the name and occupation properties 
// extract the first character in the name 
// convert the character at index 0 to uppercase
// use string interpolation to make it a sentence

// const objectToSentences = (people) => {
//   return people.map(person => `${person.name.charAt(0).toUpperCase()}${person.name.slice(1)} is ${person.occupation.toLowerCase()}.`)
// }

// wrote the code for my psuedocdoe above here got bad test becuse it was only returning the first character capitilized
// used slice and join to return the whole word 
// added slice and join but that didnt work because I need to capitilize the last name also

// iterate through the word and then capitlize each character at the 0 index then concatinate that with the rest of the word


const objectToSentences = (people) => {
  return people.map(person => `${person.name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} is ${person.occupation}.`)
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.


// a) Create a test with an expect statement using the variables provided.
describe("getRemainders", () => {
test("returns an array of the remainders of the numbers when divided by 3", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

  expect(getRemainders(hodgepodge1)).toEqual([2, 0, -1, 0])
  expect(getRemainders(hodgepodge2)).toEqual([2, 1, -1])
})
})


// b) Create the function that makes the test pass.

//pseudocode
// declare a function remainders
// we want filter out the numbers from the array 
// we wnat to check to make sure it is a number then filter it out into a new array 
// once its filtered out were going to take that number and make a new array of the remainders
// were going to return the remainder

getRemainders = (arr) => {
  return arr.filter(elem => typeof elem === 'number').map(num => num % 3)
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.454 s, estimated 1 s
// Ran all test suites.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]
test("should return the sum of all the numbers cubed", () => {
  expect(sumCubed(cubeAndSum1)).toEqual(99)
  expect(sumCubed(cubeAndSum2)).toEqual(1125)
})
})
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// declare a function
// were going to take an array as the paramater
// declare a new constant for the sum make that 0
// iterate through each number in the array and multiply by 3
// add that to the sum we declared earlier
// return the sum

// sumCubed = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += (arr[i] * 3)
//   }
//   return sum
// }

// wrote this code here didnt work i was expecting 99 i got 27
// I was just multiplying by three
// I used math.pow to cube the number and then add it to the sum 

sumCubed = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3)
  }
  return sum
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.464 s, estimated 1 s