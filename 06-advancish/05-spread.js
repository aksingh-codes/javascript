// ... spread / rest operator

const max = Math.max(2, 3, 34, 34, 45, 4, 53, 2, 32, 1);
// max can take any no. of arguments

console.log(max);

function sumOne(a, b) {
  return a + b;
}

const arr = [1, 7];
// console.log(sumOne(4, 2));
// console.log(sumOne(arr));
// console.log(sumOne(...arr)); // Spread Operator

// This is Rest operator
function sumTwo(...operands) {
  console.log(operands);
  let sum = 0;
  for (const operand of operands) {
    sum += operand;
  }
  return sum;
}

console.log(sumTwo(43, 43, 45, 435, 34, 63));

// Rest => put into array
// Spread => spread out

function sumThree(a, b, ...operands) {
  let multi = a * b;
  let sum = 0;
  for (const operand of operands) {
    sum += operand;
  }
  return [sum, multi];
}

console.log(sumThree(2, 3, 4, 5, 6));
