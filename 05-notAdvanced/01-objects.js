// Prototypes

// this is a prototype
var User = function(firstName, couseCount) {
    this.firstName = firstName;
    this.couseCount = couseCount;
    this.getCourseCount = function() {
        console.log(`Course count is: ${this.courseCount}`);
    }
};

// this is the proto which we saw in browser
// by proto we can add more functions, properties from outside of the object
User.prototype.getFirstName = function() {
    console.log(`Your firstname is: ${this.firstName}`);
}

// prototypes are used to create objects in functional programming, kind of smilar to classes

// By using new, we are saying this is not a regular function call
// we are creating a new memory space there we create this user and then give it 
// to ashwani
var ashwani = new User("ashwani", 1);
console.log(ashwani)

var sam = new User("sam", 3);
console.log(sam);


// this is a regular function call thats why this will point to window object/global
var hitesh = User("hitesh", 100);
console.log(hitesh);    // undefined

console.log(firstName); // hitesh


// ----------------------------------------- Object Chain --------------------------------

// Check
// hasOwnProperty -> is inside proto
if (ashwani.hasOwnProperty("firstName")) {
    ashwani.getFirstName()
}


// Almost everything, in js are objects. We can see methods available in proto.
// We can also make custom objects like arrays by injecting methods, properties in proto