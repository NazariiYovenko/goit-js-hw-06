let counterValue = 0;
const counter = document.querySelector("#value");
const button_decrement = document.querySelector(
  'button[data-action="decrement"]'
);

button_decrement.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
});

const button_increment = document.querySelector(
  'button[data-action="increment"]'
);

button_increment.addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
});
