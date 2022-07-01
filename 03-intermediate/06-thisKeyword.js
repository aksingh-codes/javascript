// Part1: this keyword

console.log(this); // this keyword tells us about the current context

function sayName() {
    var name = "Ashwani"
    console.log(this)
}

sayName()