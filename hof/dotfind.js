const numbers = [1, 2, 3, 4, 5];

let ans = numbers.find((num) => num === 4);

console.log(ans); // Output: 4
let was = numbers.find((n)=> n ===3);
console.log(was); // Output: 3

// The find method returns the first element in the array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
// The find method does not execute the function for empty elements.