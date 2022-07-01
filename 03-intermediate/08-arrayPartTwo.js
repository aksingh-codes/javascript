// Callback and arrow functions

// function isEven(element) {
//     return element%2 === 0
// }

// const isEven = (element) => {
//     return element%2 === 0
// }


const isEven = (element) => (element%2 === 0);

// console.log(isEven(2))

// const result = [2, 4, 6, 8].every(isEven); // isEven is passed as a callback
// console.log(result);

// The every() method tests whether all elements in the array 
// pass the test implemented by the provided function. 
// It returns a Boolean value. 

const result = [2, 3, 6, 8].every(
    element => (element%2 == 0)
); 
console.log(result);
