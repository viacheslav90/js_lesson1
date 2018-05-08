function displayTodoItem(todoItem) {
    const todoItemsDiv = document.getElementsByTagName("div");

    const todoItemSpan = document.createElement("span");
    todoItemSpan.setAttribute("id", `todo${todoItem.getID()}`);

    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("id", `text-${todoItem.getID()}`);
    todoDiv.innerHTML = `${todoItem.getText()}`;

    const btnsDiv = document.createElement("div");
    btnsDiv.setAttribute("class", "btns");

    const editBtn = document.createElement("button");
    editBtn.setAttribute("id", `edit-${todoItem.getID()}`);
    editBtn.setAttribute("class", "edit-btn");
    editBtn.setAttribute("onclick", `editView(${todoItem.getID()})`);
    editBtn.innerHTML = "Edit";

    const completeBtn = document.createElement("button");
    completeBtn.setAttribute("id", `complete-${todoItem.getID()}`);
    completeBtn.setAttribute("class", "complete-btn");
    completeBtn.setAttribute("onclick", `completeTodoItem(${todoItem.getID()})`);
    completeBtn.innerHTML = "Complete";

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", `delete-${todoItem.getID()}`);
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.setAttribute("onclick", `deleteTodoItem(${todoItem.getID()})`);
    deleteBtn.innerHTML = "Delete";

    btnsDiv.appendChild(editBtn);
    btnsDiv.appendChild(completeBtn);
    btnsDiv.appendChild(deleteBtn);
    todoItemSpan.appendChild(todoDiv);
    todoItemSpan.appendChild(btnsDiv);

    if (todoItem.getCompleted() === true) {
        todoItemsDiv[0].appendChild(todoItemSpan);
        completeBtn.style.display = "none";
        editBtn.style.display = "none";
        deleteBtn.style.display = "none";
        todoItemSpan.setAttribute("class", "completed");
    } else {
        todoItemsDiv[0].appendChild(todoItemSpan);
        todoItemSpan.setAttribute("class", "not-completed");
    }
}

function deleteTodoFromView(todoItem) {
    const todoItemSpan = document.getElementById(`todo${todoItem.getID()}`);
    todoItemSpan.remove();
}

function completeteView(todoItem) {
    const todoItemSpan = document.getElementById(`todo${todoItem.getID()}`);
    todoItemSpan.setAttribute("class", "completed");

    const btns = todoItemSpan.getElementsByTagName("button");

    for (let i = btns.length-1; i >= 0; i--)
        btns.item(i).remove();

}

function editView(todoId) {
    const todoItemSpan = document.getElementById(`todo${todoId}`);
    const todoDiv = document.getElementById(`text-${todoId}`);
    const btnsDiv = todoItemSpan.getElementsByClassName("btns");
    const todoText = todoDiv.innerText;
    todoDiv.innerHTML = "";

    const btns = todoItemSpan.getElementsByTagName("button");
    for (let i = btns.length-1; i >= 0; i--)
        btns.item(i).style.display = "none";

    const inputTextField = document.createElement("input");
    inputTextField.setAttribute("id", `input-text-${todoId}`);
    inputTextField.setAttribute("type", "text");
    inputTextField.setAttribute("placeholder", `${todoText}`);
    todoDiv.appendChild(inputTextField);

    const saveBtn = document.createElement("button");
    saveBtn.setAttribute("id", `save-${todoId}`);
    saveBtn.setAttribute("class", "save-btn");
    saveBtn.setAttribute("onclick", `getTextAndEdit(${todoId})`);
    saveBtn.innerHTML = "Save";

    btnsDiv[0].appendChild(saveBtn);
}

function getTextAndEdit(todoId) {
    const todoItemSpan = document.getElementById(`todo${todoId}`);
    const inputField = document.getElementById(`input-text-${todoId}`);
    let text = inputField.value;
    if (text === "")
        text = inputField.getAttribute("placeholder");
    const result = editTodoItem(todoId, text);

    if (result) {
        const saveBtn = document.getElementById(`save-${todoId}`);
        saveBtn.remove();
        const todoDiv = document.getElementById(`text-${todoId}`);
        const btnsDiv = todoItemSpan.getElementsByClassName("btns");
        const btns = btnsDiv[0].getElementsByTagName("button");
        todoDiv.innerText = text;
        for (let i = btns.length-1; i >= 0; i--)
            btns.item(i).style.display = "inline";
    }
}

function addTodo() {
    const todoItemId = document.getElementById("todo-id");
    const todoItemText = document.getElementById("todo-text");
    const id = Number(todoItemId.value);
    const text = todoItemText.value;
    const todo = new TodoItem(id, text);
    addTodoItem(todo);
}

function displayFilteredItems(todoItems) {
    const todoItemsDiv = document.getElementsByTagName("div");
    todoItems.forEach((child) => {
        console.log(child);
    });
    todoItems.forEach(todoItem => {
        displayTodoItem(todoItem);
    });
}

