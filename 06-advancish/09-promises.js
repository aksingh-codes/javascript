const uno = () => {
  return "I am one";
};
const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am two");
    }, 3000);
  });
};
const tres = () => {
  return "I am three";
};

// marked the function as asynchronous
const callME = async () => {
  let valOne = uno();
  console.log(valOne);

  //   awaiting for dos to compete
  let valTwo = await dos();
  console.log(valTwo);

  let valThree = tres();
  console.log(valThree);
};

callME();
