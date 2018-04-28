function addTodoItem (todoItem) {
    if (!validateTodoID(todoItem.id) ||
        !validateTodoText(todoItem.text) ||
        validateTodoCompleted(todoItem.completed) ||
        Object.keys(todoItem).length !== 3)
        return false;
    else {
        todoItems.push(todoItem);
        return true;
    }
}


function viewTodoList (itemsType) {

    switch (itemsType) {

        case "completed":
            return todoItems.filter(function (element) {
                return element.completed === true;
            });
            break;

        case "not_completed":
            return todoItems.filter(function (element) {
                return element.completed === false;
            });
            break;

        case "all":
            return todoItems;
            break;

        default:
            return false;
            break;
    }
}


function editTodoItem (todoItemId, newText) {
    var index = getTodoIndexById(todoItemId);
    if (index !== false) {
        if(!validateTodoText(newText))
            return false;
        todoItems[index].text = newText;
        return true;
    }
    return false;
}


function deleteTodoItem (todoItemId) {
    var index = getTodoIndexById(todoItemId);
    if (index !== false) {
        todoItems.splice(index, 1);
            return true;
    }
    return false
}


function completeTodoItem (todoItemId) {
    var index = getTodoIndexById(todoItemId);
    if (index !== false) {
        if (!validateTodoCompleted(todoItemId))
            return false;
        todoItems[index].completed = true;
        return true;
    }
    return false;
}


function validateTodoID (todoID) {
    if (typeof todoID === "undefined" ||
        !Number.isInteger(todoID) ||
        todoID < 0)
        return false;
    for (var i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === todoID)
            return false;
    }
    return true;
}


function validateTodoText (todoText) {
    if (todoText === "" ||
        typeof todoText === "undefined")
        return false;
    return true;
}

function validateTodoCompleted(todoCompleted) {
    return todoCompleted !== false;
}


function getTodoIndexById(todoID) {
    for (var i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === todoID)
            return i;
    }
    return false;
}


function TodoItem(id, text) {
    this.id = id;
    this.text = text;
    this.completed = false;
}