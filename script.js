const input = document.querySelector("#input");
const addButton = document.querySelector("#add-button");
const lists = document.querySelector(".lists");

function addTask() {
  addButton.addEventListener("click", function (e) {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = "Delete";
    const newTask = input.value;
    listItem.innerHTML = newTask;
    listItem.appendChild(deleteButton);
    lists.appendChild(listItem);
    deleteButton.addEventListener("click", function (e) {
      listItem.remove();
    });
    listItem.addEventListener("dblclick", function (e) {
      if (e.target.tagName !== "BUTTON") {
        listItem.classList.toggle("completed-todotask");
      }
    });

    clearInputField();
  });
}
addTask();

function clearInputField() {
  input.value = "";
}
