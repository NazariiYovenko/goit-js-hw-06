const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const inputMin = input.getAttribute("min");
const inputMax = input.getAttribute("max");

text.style.fontSize = `${input.value}px`;
input.addEventListener("input", () => {
  text.style.fontSize = `${input.value}px`;
  console.log(input.style.fontSize);
});
