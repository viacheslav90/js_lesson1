function displayTodoItem(todoItem) {
    const todoItemsDiv = document.getElementsByTagName("div");

    const todoItemSpan = document.createElement("span");
    todoItemSpan.setAttribute("id", `todo${todoItem.getID()}`);

    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("class", "text-todo");
    todoDiv.innerHTML = `${todoItem.getText()}`;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("class", "buttons");

    const editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-btn");
    editButton.setAttribute("onclick", `editView(${todoItem.getID()})`);
    editButton.innerHTML = "Edit";

    const completeButton = document.createElement("button");
    completeButton.setAttribute("class", "complete-btn");
    completeButton.setAttribute("onclick", `completeTodoItem(${todoItem.getID()})`);
    completeButton.innerHTML = "Complete";

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-btn");
    deleteButton.setAttribute("onclick", `deleteTodoItem(${todoItem.getID()})`);
    deleteButton.innerHTML = "Delete";


    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(completeButton);
    buttonsDiv.appendChild(deleteButton);
    todoItemSpan.appendChild(todoDiv);
    todoItemSpan.appendChild(buttonsDiv);

    if (todoItem.getCompleted() === true) {
        completeButton.style.display = "none";
        editButton.style.display = "none";
        deleteButton.style.display = "none";
        todoItemSpan.setAttribute("class", "completed");
    }
    else {
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
    const buttons = todoItemSpan.getElementsByTagName("button");
    for (let i = buttons.length-1; i >= 0; i--)
        buttons.item(0).remove();

}

function editView(todoId) {
    const todoItemSpan = document.getElementById(`todo${todoId}`);
    const todoDiv = todoItemSpan.getElementsByClassName("text-todo");
    const buttonsDiv = todoItemSpan.getElementsByClassName("buttons");
    const todoText = todoDiv[0].innerText;
    todoDiv[0].innerHTML = "";

    const buttons = todoItemSpan.getElementsByTagName("button");
    for (let i = buttons.length-1; i >= 0; i--)
        buttons.item(i).style.display = "none";

    const inputTextField = document.createElement("input");
    inputTextField.setAttribute("type", "text");
    inputTextField.setAttribute("placeholder", `${todoText}`);
    todoDiv[0].appendChild(inputTextField);

    const saveButton = document.createElement("button");
    saveButton.setAttribute("class", "save-btn");
    saveButton.setAttribute("onclick", `getTextAndEdit(${todoId})`);
    saveButton.innerHTML = "Save";

    buttonsDiv[0].appendChild(saveButton);
}

function getTextAndEdit(todoId) {
    const todoItemSpan = document.getElementById(`todo${todoId}`);
    const inputField = todoItemSpan.getElementsByTagName("input");
    let text = inputField[0].value;
    if (text === "")
        text = inputField[0].getAttribute("placeholder");
    const result = editTodoItem(todoId, text);

    if (result) {
        const saveBtn = todoItemSpan.getElementsByClassName("save-btn");
        saveBtn[0].remove();
        const todoDiv = todoItemSpan.getElementsByClassName("text-todo");
        const buttonsDiv = todoItemSpan.getElementsByClassName("buttons");
        const buttons = buttonsDiv[0].getElementsByTagName("button");
        todoDiv[0].innerText = text;
        for (let i = buttons.length-1; i >= 0; i--)
            buttons.item(i).style.display = "inline";
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

