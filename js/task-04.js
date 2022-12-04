let counterValue = 0;
const counter = document.querySelector("#value");
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

buttonDecrement.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
});

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

buttonIncrement.addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
});
