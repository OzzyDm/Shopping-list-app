const addButton = document.querySelector("#add");

function addItem() {
  const enterItem = document.querySelector("#enterItem").value;
  const ul = document.querySelector("#list");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(enterItem));
  ul.appendChild(li);
}

addButton.addEventListener("click", addItem);

const textbox = document.getElementById("enterItem");
textbox.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") {
    document.getElementById("add").click();
    clearTextarea();
  }
});

function clearTextarea() {
  document.querySelector("#enterItem").value = "";
}
