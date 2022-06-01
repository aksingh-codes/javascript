// import User from "./06-class";

const User = require("./06-class.js");

const ashwani = new User("ashwani", "ash@gmail.com");

ashwani.enrollCourse("JavaScript Course");
ashwani.enrollCourse("React Course");

console.log(ashwani);
