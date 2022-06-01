// Lexical scope is the ability for a function scope
// to access variables from the parent scope. We call
// the child function to be lexically bound by that
// of the parent function. The diagram below outlines
// the supposed hierarchy that the lexical scope maintains in JavaScript.

function init() {
  var firstName = "Ashwani";

  function sayHello() {
    console.log(firstName);
  }

  sayHello();
}

init();
console.log(firstName);

// Didnt understand
