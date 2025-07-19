
const numbers = [1, 2, 3, 4, 5];

const filtered = numbers.filter((num) => num % 2 == 0  
 );

console.log(filtered); // Output: [2, 4]

// The filter method creates a new array with all elements that pass the test implemented by the provided function.
// If no elements pass the test, an empty array will be returned.
// The filter method does not execute the function for empty elements.
let filtered2 = numbers.filter((num) => {
  return num < 3;
});

console.log(filtered2); // Output: [1, 2]

// The filter method creates a new array with all elements that pass the test implemented by the provided function.
// If no elements pass the test, an empty array will be returned.
// The filter method does not execute the function for empty elements.