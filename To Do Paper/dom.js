function displayTodoItem(todoItem) {
    const todoItemsDiv = document.getElementById("todo-items");

    const todoItemSpan = document.createElement("span");
    todoItemSpan.setAttribute("id", `todo${todoItem.getID()}`);

    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("id", `text-${todoItem.getID()}`);
    todoDiv.setAttribute("class", "todo-text");
    todoDiv.innerHTML = `${todoItem.getText()}`;

    const btnsDiv = document.createElement("div");
    btnsDiv.setAttribute("class", "btns");

    const editBtn = document.createElement("button");
    editBtn.setAttribute("id", `edit-${todoItem.getID()}`);
    editBtn.setAttribute("class", "edit-btn");
    editBtn.addEventListener('click', () => {
        editView(todoItem.getID())
    });
    editBtn.innerHTML = "Edit";

    const completeCheckbox = document.createElement("input");
    completeCheckbox.setAttribute("type", "checkbox");
    completeCheckbox.setAttribute("id", `complete-${todoItem.getID()}`);
    completeCheckbox.setAttribute("class", "complete-btn");
    completeCheckbox.addEventListener('click', (e) => {
        if (e.target.checked)
            completeTodoItem(todoItem.getID());
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", `delete-${todoItem.getID()}`);
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener('click', function () {
       deleteTodoItem(todoItem.getID())
    });

    btnsDiv.appendChild(completeCheckbox);
    btnsDiv.appendChild(editBtn);
    btnsDiv.appendChild(deleteBtn);
    todoItemSpan.appendChild(todoDiv);
    todoItemSpan.appendChild(btnsDiv);

    if (todoItem.getCompleted()) {
        todoItemsDiv.appendChild(todoItemSpan);
        completeCheckbox.disabled = true;
        completeCheckbox.checked = true;
        editBtn.style.display = "none";
        deleteBtn.style.display = "none";
        todoItemSpan.setAttribute("class", "completed");
    } else {
        todoItemsDiv.appendChild(todoItemSpan);
        todoItemSpan.setAttribute("class", "not-completed");
    }

    const allRadio = document.getElementById("show-all");
    const completedRadio = document.getElementById("show-completed");
    const notCompletedRadio = document.getElementById("show-not-completed");
}

function deleteTodoFromView(todoItem) {
    const todoItemSpan = document.getElementById(`todo${todoItem.getID()}`);
    if (todoItemSpan)
        todoItemSpan.remove();
}

function completeteView(todoItem) {
    const todoItemSpan = document.getElementById(`todo${todoItem.getID()}`);
    todoItemSpan.setAttribute("class", "completed");
    const completeCheckbox = document.getElementById(`complete-${todoItem.getID()}`);
    completeCheckbox.disabled = true;

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
    document.getElementById(`complete-${todoId}`).style.display = "none";

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
        document.getElementById(`complete-${todoId}`).style.display = "inline";
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

function displayFilteredItems(filter) {
    const allRadio = document.getElementById("show-all");
    const completedRadio = document.getElementById("show-completed");
    const notCompletedRadio = document.getElementById("show-not-completed");
    const todoItemsDiv = document.getElementById("todo-items");

    todoItems.forEach((todoItem) => {
        deleteTodoFromView(todoItem);
    });

    let status;
    switch (filter) {
        case "all":
            allRadio.checked = true;
            completedRadio.checked = false;
            notCompletedRadio.checked = false;
            break;
        case "completed":
            allRadio.checked = false;
            completedRadio.checked = true;
            notCompletedRadio.checked = false;
            status = true;
            break;
        case "not_completed":
            allRadio.checked = false;
            completedRadio.checked = false;
            notCompletedRadio.checked = true;
            status = false;
            break;
    }

    if (filter === "all")
        todoItems.forEach(item => {displayTodoItem(item)});
    else
        todoItems.forEach(item => {
            if (item.getCompleted() === status)
                displayTodoItem(item);
    });
}
