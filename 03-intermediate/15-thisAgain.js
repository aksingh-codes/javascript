// THIS


// On a regular function call this always points towards window object.
// Regular function call means a like below

// sayMe(); // this is a regular function call

// user.say()  // is not regular function call

console.log(this);

const user = {
    firstName: "Ashwani Kumar",
    lastName: "Singh",
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    getCourseCount: function () {
        console.log("Line 21", this);
        
        function sayHello() {
            console.log("hello");
            console.log("Line 25", this);
        }
        // This is a regular function call so this will
        // point to global object / window object
        sayHello()
    }
};

user.getCourseCount();