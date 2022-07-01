fetch("https://api.chucknorris.io/jokes/random")
  .then((result) => result.json())
  .then((data) => {
    // console.log("Data is: ", data);
    const joke = data.value;
    console.log("JOKE: ", joke);
  })
  .catch((err) => console.log(err));
