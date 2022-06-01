// MDN Docs

// creating object wiht Object.create

var User = {
    name: "",
    getUserName: function() {
        console.log(`User name is: ${this.name}`);
    }
}

var hitesh = Object.create(User)
console.log(hitesh);
// everything created will go inside proto

// using constructor
var sam = Object.create(User, {
    name: {
        value: "sammy"
    },
    courseCount: {
        value: 3
    }
})
// 🤢 shitty syntax