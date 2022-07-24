const addButton = document.querySelector("#add");

function addItem() {
  const enterItem = document.querySelector("#enterItem").value;
  const ul = document.querySelector("#list");
  const li = document.createElement("li");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  editButton.setAttribute("class", "edit");
  deleteButton.setAttribute("class", "delete");
  editButton.textContent = "Edit";
  deleteButton.textContent = "Delete";
  li.append(document.createTextNode(enterItem), editButton, deleteButton);
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
