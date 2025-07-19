// if you want to manupulate a arraay and create new array from it then you can use map function
const numbers = [1, 2, 3, 4, 5];
 // Output: [2, 4, 6, 8, 10] 

 function double(num){
    return num*2;
 }

 let newarry = numbers.map(double);
// Output: [2, 4, 6, 8, 10]
console.log(newarry);
// for each only for some internal task and it does not return anything or for only printing purpose
// map is used to create a new array from the existing array by applying a function to each element
// map is used to transform the elements of an array into a new array