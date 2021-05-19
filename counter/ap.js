const value = document.getElementById("value");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
let val = 0;
increase.addEventListener("click", () => {
  val += 1;
  value.textContent = val;
  if (val >= 0) {
    value.classList.add("green");
    value.classList.remove("red");
  } else {
    value.classList.add("red");
    value.classList.remove("green");
  }
});
decrease.addEventListener("click", () => {
  val -= 1;
  value.textContent = val;
  if (val >= 0) {
    value.classList.add("green");
    value.classList.remove("red");
  } else {
    value.classList.add("red");
    value.classList.remove("green");
  }
});
reset.addEventListener("click", () => {
  val = 0;
  value.textContent = val;
  value.classList.remove("green", "red");
});
