const addButton = document.querySelector("#add");

function addItem() {
  if (enterItem.value !== "") {
    const enterItem = document.querySelector("#enterItem").value;
    const ul = document.querySelector("#list");
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.setAttribute("disabled", "true");
    input.setAttribute("class", "item");
    input.value = enterItem;
    li.append(input);
    ul.appendChild(li);
    const editBtn = document.querySelector(".edit");
    const deleteBtn = document.querySelector(".delete");
    editBtn.addEventListener("click", editItem);
    deleteBtn.addEventListener("click", deleteItem, clearTextarea);
  } else {
    alert("Cannot be empty!");
  }
}

addButton.addEventListener("click", addItem, clearTextarea);

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
  const saveBtn = document.querySelector(".save");
  if (!saveBtn) {
    const saveButton = document.createElement("button");
    saveButton.setAttribute("class", "save");
    saveButton.textContent = "Save";
    const editBtn = document.querySelector(".edit");
    editBtn.parentNode.insertBefore(saveButton, editBtn.nextSibling);
    saveButton.addEventListener("click", saveItems);
  }
}

function deleteItem() {
  const inputList = document.querySelectorAll("li");
  inputList.forEach((item) => {
    item.remove();
  });
  const saveBtn = document.querySelector(".save");
  if (saveBtn) {
    saveBtn.remove();
  }
}

function saveItems() {
  const inputList = document.querySelectorAll(".item");
  inputList.forEach((item) => {
    item.setAttribute("disabled", "true");
  });
}
