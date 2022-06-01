const cards = document.querySelectorAll(".card");

// Variables
let isFlipped = false;
let firstCard = null;
let secondCard = null;

cards.forEach((card) => {
  card.addEventListener("click", flip);
});

function flip() {
  this.classList.toggle("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    checkIt();
  }
}

function checkIt() {
  // console.log("checking");

  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

function shuffle() {
  console.log("shufflle");
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index; // flex box property
    console.log(card);
  });
}

shuffle();
