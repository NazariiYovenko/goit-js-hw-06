function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let markup = "";
  let startWidth = 30;
  let starHeight = 30;
  for (let i = 0; i < amount; i++) {
    markup += `<div style="background-color: ${getRandomHexColor()}; width: ${startWidth}px; height: ${starHeight}px"></div>`;
    startWidth += 10;
    starHeight += 10;
  }
  boxStore.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  boxStore.innerHTML = "";
}

const boxStore = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("#controls input");

input.value = 1;

createButton.addEventListener("click", () => createBoxes(input.value));
destroyButton.addEventListener("click", () => destroyBoxes());
