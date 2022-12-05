const items = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${items.length}\n\n`);
[...items].map((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}\n\n`);
});
