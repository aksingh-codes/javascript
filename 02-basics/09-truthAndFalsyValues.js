// Coercion and falsy values


//  These all following are falsy values
// undefined
// null
// 0
// ''
// NaN

// Anything apart from these are truthy values

// Implicit type conversion
console.log(2 + "2")

var user = "2"

if (2 == user) {
    console.log("This is called coercion, == means you dont wanna check datatypes.")
}