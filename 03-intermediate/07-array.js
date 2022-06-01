// [] - brackets
// {} - braces
// () - paranthesis

// Declaration

var countries = ["India", "USA", "Japan"];

// this declaration can be useful
var states = new Array("Uttar Pradesh", "Rajasthan", "Assam")

// accessing elements
console.log(states[0]);

// update elements
states[0] = "Punjab"
console.log(states);

// we can insert different types of data in array
const user = ["Ashwani", "ashwani@dev.in", 21, 2, false];
// but this is not good practice for storing different data we,
// have seperate data structures for that.

// methods and properties

console.log(states.length);
user.pop();     // remove last element

user.unshift("new value");  // add element at front
console.log(user);
user.shift()    // remove element from front
console.log(user);

console.log(user.indexOf(2))
console.log(user.indexOf("new"))

console.log(Array.from("ashwani")) // pass any iteratable -> return array