const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const main = document.querySelector("main");

btn.addEventListener("click", changeBackground);

function changeBackground() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomHex()];
    color.textContent = hexColor;
    main.style.backgroundColor = hexColor;
  }
}

function getRandomHex() {
  return Math.floor(Math.random() * hex.length);
}
