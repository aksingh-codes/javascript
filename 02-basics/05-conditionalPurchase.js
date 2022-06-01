var isLoggedIn = false;
var isEmailVerified = true;
var cardInfo = true;

if (isLoggedIn) {
    console.log("Logged IN Success")
    if (isEmailVerified) {
        console.log("Email is verified");
        if (cardInfo) {
            console.log("You can make purchase")
        }
    }
}

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("allowed for purchase")
} else {
    console.log("not allowed");
}