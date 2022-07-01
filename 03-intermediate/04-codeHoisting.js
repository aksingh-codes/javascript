// CODE HOISTING

/*
There are always two types of contexts
1. Global context
2. Context which is currently executing.
*/

tipper("5")

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}


const bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("200")

console.log(name); // undefined
var name = "ashwani"; 


function sayNam() {
    var name = "Ash"
    console.log(name); // execution context
}

console.log(name) //globla context