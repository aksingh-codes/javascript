// EVENT LOOP

const uno = () => {
  console.log("I am one");
};
const dos = () => {
  setTimeout(() => {
    console.log("Picture Loaded");
  }, 3000);
  console.log("I am two");
};
const tres = () => {
  console.log("I am three");
};

uno();
dos();
tres();

// this is ok in frontend

// but in backend for,e.g. if some code is dependent on database may be we cant
