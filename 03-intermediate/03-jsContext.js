// Contexts ---------------------------------------------------------

// This works...😭
// this  is all because global context
// sayHello();

// function sayHello() {
//     console.log("hello")
// }

// Why?


/*
Javascript always have a concept of context

And a global context

In a Browser the global context is => window
In a Node the global context is => something different than browser

--------------------------------------

The thing is =>

Everything declared are registered in the context and thats why,
a function declared below call can be called in JS.

*/