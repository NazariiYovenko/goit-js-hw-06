function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let colorName = document.querySelector(".color");
const body = document.querySelector("body");
const button = document.querySelector(".change-color");
button.addEventListener("click", () => {
  const color = getRandomHexColor();
  colorName.textContent = color;
  body.style.backgroundColor = color;
});
