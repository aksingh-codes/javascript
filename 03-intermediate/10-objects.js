const user = {
    firstName: "Ashwani Kumar",
    lastName: "Singh",
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true
};

// access
console.log(user.firstName);
console.log(user["lastName"]);  // not used much

user.loginCount = 54;

console.log(user.loginCount);
console.table(user);
