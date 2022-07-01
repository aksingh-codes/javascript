const courses = [
  {
    name: "The React Course",
    price: "2.3",
  },
  {
    name: "The Java Course",
    price: "2.9",
  },
  {
    name: "The C Course",
    price: "2.1",
  },
  {
    name: "The C++ Course",
    price: "2.7",
  },
];

function generateLIST() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";

  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode("$ " + course.price);
    span.appendChild(price);

    li.appendChild(span);

    ul.appendChild(li);
  });
}

// generateLIST();

window.addEventListener("load", generateLIST);

// SORTING...

const sortBtnASC = document.querySelector(".sort-btn.asc");

sortBtnASC.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateLIST();
});

const sortBtnDESC = document.querySelector(".sort-btn.desc");

sortBtnDESC.addEventListener("click", () => {
  courses.sort((a, b) => b.price - a.price);
  generateLIST();
});
