let setup = document.getElementById("setup");
let punchline = document.getElementById("punchline");
const getJoke = async () => {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const data = await response.json();
  console.log(data);
  setup.textContent = data.setup;
  const time = setTimeout(() => {
    punchline.textContent = data.punchline;
  }, 2000);

  setTimeout(() => {
    clearTimeout(time);
  }, 2000);
};

const button = document.getElementById("get-joke");

button.addEventListener("click", (setup) => {
  punchline.textContent = "";
  getJoke();
});
