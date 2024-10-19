bobthebuilder = document.querySelectorAll(
  ".Grouping-styles__items a:nth-child(2)"
);
nodes = [];
for (let i = 0; i < bobthebuilder.length; i++) {
  const element = bobthebuilder[i];
  nodes[i] = element.textContent;
}
console.log(nodes);
