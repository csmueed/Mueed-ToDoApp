const input = document.querySelector("#input");
const addButton = document.querySelector("#add-button");
const lists = document.querySelector(".lists");
const allTasks = document.querySelector("#all-tasks");
const completedTasks = document.querySelector("#completed-tasks");
const incompleteTasks = document.querySelector("#Incomplete-tasks");

function addTask() {
  addButton.addEventListener("click", function (e) {
    if (input.value.trim() === "") return;
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = "Delete";
    const newTask = input.value;
    listItem.textContent = newTask;
    listItem.appendChild(deleteButton);
    listItem.classList.add("todo");
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
filteration();

function clearInputField() {
  input.value = "";
}

function filteration () {
  allTasks.addEventListener("click", function (e) {
  document.querySelectorAll(".todo").forEach((tasks) => {
    tasks.style.display = "list-item";
  });
});
completedTasks.addEventListener("click", function (e) {
  document.querySelectorAll(".todo").forEach((tasks) => {
    if (tasks.classList.contains("completed-todotask")) {
      tasks.style.display = "list-item";
    } else {
      tasks.style.display = "none";
    }
  });
});
incompleteTasks.addEventListener("click", function (e) {
  document.querySelectorAll(".todo").forEach((tasks) => {
    if (!tasks.classList.contains("completed-todotask")) {
      tasks.style.display = "list-item";
    } else {
      tasks.style.display = "none";
    }
  });
});
};
