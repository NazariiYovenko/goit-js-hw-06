const items = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${items.length}\n\n`);
for (const item of items) {
  const title = item.querySelector("h2").textContent;
  const quantity = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${quantity}\n\n`);
}
