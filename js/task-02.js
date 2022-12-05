const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
let elements = [];
ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  elements.push(li);
});
list.append(...elements);
