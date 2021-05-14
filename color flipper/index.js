const bar = document.querySelector(".bar");
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const sidebar = document.querySelector(".side-bar");
const mbar = document.querySelectorAll(".mbar");
bar.addEventListener("click", () => {
  sidebar.classList.toggle("hover");
});
const colors = [
  "red",
  "cyan",
  "green",
  "yellowgreen",
  "white",
  "blue",
  "chartreuse",
  "coral",
  "chocolate",
  "crimson",
];
btn.addEventListener("click", () => {
  const num = getRandom();
  console.log(num);
  document.body.style.backgroundColor = colors[num];
  color.textContent = colors[num];
});
function getRandom() {
  return Math.floor(Math.random() * colors.length);
}
