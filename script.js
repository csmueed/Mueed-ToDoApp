const input = document.querySelector("#input");
const addButton = document.querySelector("#add-button");
const lists = document.querySelector(".lists");

function addTask() {
  addButton.addEventListener("click", function (e) {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.style.width = '60px';
    deleteButton.style.height = '25px';
    deleteButton.style.borderRadius = '7px';
    deleteButton.style.backgroundColor = 'yellow';
    const newTask = input.value;
    listItem.innerHTML = newTask;
    listItem.appendChild(deleteButton);
    lists.appendChild(listItem);
    deleteButton.addEventListener('click', function(e){
        listItem.remove();
    })
    clearInputField();
  });
}
addTask();

function clearInputField() {
  input.value = "";
};

