const textArea = document.querySelector(".textarea");

const button = document.querySelector(".buttoninput");

const toDoList = document.querySelector(".todolist");

button.addEventListener("click", addToDoListItem);

function addToDoListItem() {

        const toDoDiv = document.createElement("div");
        toDoDiv.classList.add("itemall");
        const item = document.createElement("p");
        item.innerHTML = textArea.value;
        item.classList.add("item");

        toDoDiv.appendChild(item);

        if (textArea.value == '') return;

        const deleteButton = document.createElement("button");

        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

        deleteButton.classList.add("trash-button")

        toDoDiv.appendChild(deleteButton);

        toDoList.appendChild(toDoDiv);

        textArea.value = '';
           
}


toDoList.addEventListener("click", deleteItem);

function deleteItem(e) {
  const item = e.target;
  console.log(item);

  if (item.classList[0] === "trash-button") {
        const parent = item.parentElement;
        parent.remove();
  }
}






