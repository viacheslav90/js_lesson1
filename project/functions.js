function addTodoItem (todoItem) {
    if (validateTodoID(todoItem.id).valid === false)
        return validateTodoID(todoItem.id).message;
    if (validateTodoText(todoItem.text).valid === false)
        return validateTodoText(todoItem.text).message;
    if (validateTodoCompleted(todoItem.completed).valid === false)
        return validateTodoCompleted(todoItem.completed).message;
    else {
        var newTodoItem = TodoItem(todoItem.text, todoItem.completed, todoItem.id)
        todoItems.push(newTodoItem);
    }
}


function viewTodoList (itemsType) {

    var filteredTodoList = [];

    switch (itemsType) {
        case "completed":
            for (var i = 0; i < todoItems.length; i++) {
                if (todoItems[i].completed === true)
                    filteredTodoList.push(todoItems[i]);
            }
            return filteredTodoList;
            break;
        case "not_completed":
            for (var i = 0; i < todoItems.length; i++) {
                if (todoItems[i].completed === false)
                    filteredTodoList.push(todoItems[i]);
            }
            return filteredTodoList;
            break;
        case "all":
            return todoItems;
            break;
        default:
            var message = "Enter one of valid types: completed, not_completed, all";
            return message;
            break;
    }
}


function editTodoItem(todoItemId, newText) {
        var index = getTodoIndexById(todoItemId);
        if (index !== false) {
            validateTodoText(newText);
            todoItems[index].text = newText;
        }
}


function deleteTodoItem(todoItemId) {
    var index = getTodoIndexById(todoItemId);
    if (index !== false)
        todoItems = todoItems.filter(function (element) {
            return todoItems.indexOf(element) !== index;
        });
}


function completeTodoItem(todoItemId) {
        var index = getTodoIndexById(todoItemId);
        if (index !== false)
            todoItems[index].completed = true;
}


function validateTodoID(todoID) {

    var message = "valid";

    for (var i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === todoID ) {
            message = "TODO item with such id is exists";
            return {valid: false, message: message};
        }
    }

    if (typeof todoID === "undefined") {
        message = "Not all required field are present";
        return {valid: false, message: message};
    }

    if (!Number.isInteger(todoID)) {
        message = "Please enter correct TODO id";
        return {valid: false, message: message};
    }
    return {valid: true, message: message};
}


function validateTodoText(todoText) {
    var message = "valid";
    if (todoText === "") {
        message = "TODO text can't be blank";
        return {valid: false, message: message};
    }

    if (typeof todoText === "undefined") {
        message = "Not all required field are present";
        return {valid: false, message: message};
    }

    return {valid: true, message: message};
}


function validateTodoCompleted(todoCompleted) {

    var message = "valid";

    if (typeof todoCompleted === "undefined") {
        message = "Not all required field are present";
        return {valid: false, message: message};
    }

    if (!typeof(todoCompleted) === "boolean") {
        message = "Compete field is incorrect";
        return {valid: false, message: message};
    }
    return {valid: true, message: message};
}


function getTodoIndexById(todoID) {
    for (var i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === todoID)
            return i;
    }
    return false;
}


function TodoItem(text, completed, id) {
    return {
        "text": text,
        "completed": completed,
        "id": id
    }
}


var todoItems = [];