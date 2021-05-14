const bar = document.querySelector(".bar");
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const sidebar = document.querySelector(".side-bar");
bar.addEventListener("click", () => {
  sidebar.classList.toggle("hover");
});
const colors = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9];
btn.addEventListener("click", () => {
  const colour = Colors();
  document.body.style.backgroundColor = colour;
  color.textContent = colour;
});
function Colors() {
  i = 0;
  let col = "#";
  for (i; i < 6; i++) {
    const random = getRandom();
    col += colors[random];
  }
  return col;
}
function getRandom() {
  return Math.floor(Math.random() * colors.length);
}
