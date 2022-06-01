function init() {
  var firstName = "Ashwani";

  function sayHello() {
    console.log(firstName);
  }

  return sayHello;
}

var value = init();

// here
// init mounts
// then firstname is registered
// sayHello is registered and returned

// as we have reference of firstName we cannot free the memory now
// thats why init function is not totally removed away yet
// And thats how we can access firstName

console.log(value);
value();

// ------------------------- classic adder example --------------

function doAddition(x) {
  return function (y) {
    // this function will ask for x from parent function
    return x + y;
  };
}

console.log(doAddition(4)(5)); // curring

/*
    Functions in JavaScript form closures. A closure is the combination of a
    function and the lexical environment within which that function was declared.
    This environment consists of any local variables that were in-scope at the
    time the closure was created. In this case, myFunc is a reference to the 
    instance of the function displayName that is created when makeFunc is run.
    The instance of displayName maintains a reference to its lexical environment, within
    which the variable name exists. For this reason, when myFunc is invoked, the variable
    name remains available for use, and "Mozilla" is passed to alert.
*/
