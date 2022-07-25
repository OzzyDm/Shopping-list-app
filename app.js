const addButton = document.querySelector("#add");
const editButton = document.querySelector(".edit");
const deleteButton = document.querySelector(".delete");

function addItem() {
  const enterItem = document.querySelector("#enterItem").value;
  const ul = document.querySelector("#list");
  const li = document.createElement("li");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const input = document.createElement("input");
  input.setAttribute("disabled", "true");
  input.setAttribute("class", "item");
  input.value = enterItem;
  editButton.setAttribute("class", "edit");
  editButton.textContent = "Edit";
  deleteButton.setAttribute("class", "delete");
  deleteButton.textContent = "Delete";
  li.append(input, editButton, deleteButton);
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

function editItem() {
  const input = document.querySelectorAll("input.item");
  input.setAttribute("disabled", "false");
}

editButton.addEventListener("click", editItem);
