const aMap = new Map();

aMap.set(0, "Shunya");
aMap.set(1, "Ek");
aMap.set(2, "Do");
aMap.set(3, "Teen");
aMap.set(4, "Chaar");
aMap.set(5, "Paanch");
aMap.set(6, "Chhaiy");
aMap.set(7, "Saat");
aMap.set(8, "Aath");
aMap.set(9, "Nau");

console.log(aMap);

console.log(aMap.get(3));

for (const key of aMap) {
  console.log(key);
}

// for (const [key, value] of aMap) {
//   console.log(`Key is: ${key}, Value is: ${value}`);
// }

//
aMap.forEach((value, key) => {
  console.log(`Key is: ${key}, Value is: ${value}`);
});

aMap.delete(3);
console.log(aMap);
