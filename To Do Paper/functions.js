function addTodoItem (todoItem) {
    if (!validateTodoID((todoItem.getID() || !validateTodoText(todoItem.getText()))))
        return false;
    todoItems.push(todoItem);
    displayTodoItem(todoItem);
    return true;
}

function viewTodoList (itemsType) {
    switch (itemsType) {
        case "completed":
            const completed = todoItems.filter(element => (element.getCompleted() === true));
            displayFilteredItems(completed);
            return completed;
        case "not_completed":
            const notCompleted = todoItems.filter(element => (element.getCompleted() === false));
            displayFilteredItems(notCompleted);
            return notCompleted;
        case "all":
            displayFilteredItems(todoItems);
            return todoItems;
        default:
            return false;
    }
}

function editTodoItem (todoItemId, newText) {
    const index = getTodoIndexById(todoItemId);
    if (index !== false) {
        const success = todoItems[index].setText(newText);
        if (success)
            return true;
    }
    return false;
}

function deleteTodoItem (todoItemId) {
    const index = getTodoIndexById(todoItemId);
    if (index !== false) {
        deleteTodoFromView(todoItems[index]);
        todoItems.splice(index, 1);
        return true;
    }
    return false
}

function completeTodoItem (todoItemId) {
    const index = getTodoIndexById(todoItemId);
    if (index !== false) {
        todoItems[index].setCompletedTrue();
        completeteView(todoItems[index]);
        return true;
    }
    return false;
}

function validateTodoID (todoID) {
    return !(typeof todoID === "undefined" || !Number.isInteger(todoID) || todoID < 0 || getTodoIndexById(todoID));
}

function validateTodoText (todoText) {
    return !(todoText === "" || typeof todoText === "undefined");
}

function getTodoIndexById(todoID) {
    let index = false;
    for (let i = 0; i < todoItems.length; i++)
        if (todoItems[i].getID() === todoID)
            return i;
    return index;
}

function TodoItem(id, text) {
    this._id = id;
    this._text = text;
    this._completed = false;
    this.getID = () => ( this._id );
    this.getText = () => ( this._text );
    this.getCompleted = () => ( this._completed );
    this.setText = newText => {
        if(!validateTodoText(newText))
            return false;
        todoItems[getTodoIndexById(this.getID())]._text = newText;
        console.log(todoItems);
        return true;
    };
    this.setCompletedTrue = () => {
        this._completed = true;
        console.log(todoItems);
    };
}

function readTodoItemsFromJSON() {
    $.getJSON("todo_list.json", data => {
        data.forEach((item) => {
            const todoItem = new TodoItem(item.id, item.text);
            addTodoItem(todoItem);
        })
    })
}