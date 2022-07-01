const userID = "abc123";

const firstName = "Ashwani Kumar";
const lastName = "Singh";
const fullName = firstName + " " + lastName;
const email = "dev.ak.singh@outlook.com";
const state = "UP";
const country = "India";
const password = "123456";
const confirmPassword = "123456";
const courseCount = 0;
const isLoggedInFromGoogle = false;

// prompt or alert can be used to take input from users from browser

const hasOrHasNotloggedInWithGoogle = isLoggedInFromGoogle ? "has" : "has not";

console.log(`
    With Unique ID: ${userID}
    User is: ${fullName}
    and his email is: ${email}
    and is from ${state}, ${country}
    and his password is: ${password}
    and has taken: ${courseCount } courses
    and ${hasOrHasNotloggedInWithGoogle} signed in with google.
`)





    //  console.log(`${userID}`)
    //  console.log(`${fullName}`)
    //  console.log(`${email}`)
    //  console.log(`${password}`)
    //  console.log(`${confirmPassword}`)
    //  console.log(`${courseCount }`)
    //  console.log(`${isLoggedInFromGoogle }`)