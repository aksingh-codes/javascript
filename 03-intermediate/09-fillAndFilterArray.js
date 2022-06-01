const arr = [2, 3, 4, 1, 9, 6, 0, 8];

console.log(
    arr.fill('h', 1, 4)
)
// fill - fills array with static element with some range

const myNumber = [2, 3, 4, 1, 9, 6, 0, 8];

// fiter takes a callback
const result = myNumber.filter(
    num => num !== 9
)

console.log(result);

// range => (firstValue, lastValue)
// firstValue is always inclusive
// lastValue is always exclusive


// ---------------------------------sliceandsplice-----------------------

const users = ["ash", "tom", "tim", "slkjf", "kfjkd", "rock", "john", "brock"];

console.log(users.slice(1, 3))  // returns slice of that range
console.log(users.slice(1))

users.splice(1, 3, "hi")    // removes elements in the range and puts given element there
console.log(users);