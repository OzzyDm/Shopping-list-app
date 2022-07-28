const addButton = document.querySelector("#add");

function addItem() {
  if (enterItem.value !== "") {
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
    li.append(input, deleteButton, editButton);
    ul.appendChild(li);
    const editBtn = document.querySelector(".edit");
    const deleteBtn = document.querySelector(".delete");
    editBtn.addEventListener("click", editItem);
    deleteBtn.addEventListener("click", deleteItem);
  } else {
    alert("List item cannot be empty!");
  }
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
  const inputList = document.querySelectorAll(".item");
  inputList.forEach((item) => {
    item.removeAttribute("disabled");
  });
}

function deleteItem() {
  this.parentNode.remove();
}
