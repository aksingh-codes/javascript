const sellingPrice = 199;
const listPrice = 799;

const discountPercent = ((listPrice - sellingPrice) / listPrice) * 100

console.log(`Discount is: ${discountPercent}`);

const displayDiscountPercentage = Math.round(discountPercent);

console.log(`Discount is: ${displayDiscountPercentage}% off`);

const result = listPrice > sellingPrice;

// typeof operator
console.log(typeof result)

// Operator Precedence in JS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Datatypes in JS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
