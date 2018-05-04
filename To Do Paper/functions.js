function addTodoItem (todoItem) {
    if (!validateTodoID(todoItem.getID()) || !validateTodoText(todoItem.getText()))
        return false;
    todoItems.push(todoItem);
    todoItem.todoItemsChangeListener();
    return true;
}

function viewTodoList (itemsType) {
    switch (itemsType) {
        case "completed":
            return todoItems.filter(element => (element.getCompleted() === true));
        case "not_completed":
            return todoItems.filter(element => (element.getCompleted() === false));
        case "all":
            return todoItems;
        default:
            return false;
    }
}

function editTodoItem (todoItemId, newText) {
    const index = getTodoIndexById(todoItemId);
    if (index !== false)
        return todoItems[index].setText(newText);
    return false;
}

function deleteTodoItem (todoItemId) {
    const index = getTodoIndexById(todoItemId);
    if (index !== false) {
        todoItems.splice(index, 1);
        return true;
    }
    return false
}

function completeTodoItem (todoItemId) {
    const index = getTodoIndexById(todoItemId);
    if (index !== false) {
        todoItems[index].setCompletedTrue();
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
    todoItems.forEach(element => {
       if (element.getID() === todoID)
           return index = todoItems.indexOf(element);
    });
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
        return true;
    };
    this.setCompletedTrue = () => { this._completed = true };
    this.todoItemsChangeListener = () => {
        console.log(todoItems);
    }
}






const todo1 = new TodoItem(1, "item1");
const todo2 = new TodoItem(2, "item2");
const todo3 = new TodoItem(3, "item3");
const todo4 = new TodoItem(4, "item4");

addTodoItem(todo1);
addTodoItem(todo2);
addTodoItem(todo3);
addTodoItem(todo4);