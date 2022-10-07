const colors = [
  "green",
  "red",
  "blue",
  "#ddd",
  "#eee123",
  "#asd123",
  "#ff23ab",
];

let btn = document.querySelector("#btn");
let main = document.querySelector("main");
let color = document.querySelector(".color");

btn.addEventListener("click", changeBackground);

function changeBackground() {
  let colorIndex = parseInt(Math.random() * colors.length);
  main.style.backgroundColor = colors[colorIndex];
  color.textContent = colors[colorIndex];
}
