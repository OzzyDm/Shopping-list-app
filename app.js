const addButton = document.querySelector("#add");
const enterItem = document.querySelector("#enterItem");

newItem.innerText = enterItem.value;

function addItem() {
  const ul = document.querySelector("#list");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode("blabla"));
  ul.appendChild(li);
}

addButton.addEventListener("click", addItem);
