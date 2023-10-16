// Array to store todos
let todos = [];

// Function to add a new todo
function addTodo() {
    const todoText = document.getElementById('new-todo').value;
    if (todoText.trim() !== '') {
        todos.push({ text: todoText, completed: false });
        document.getElementById('new-todo').value = '';
        displayTodos();
    }
}

// Function to delete a todo
function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}

// Function to mark a todo as complete
function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    displayTodos();
}

// Function to update the title of a todo
function updateTitle(index, newTitle) {
    todos[index].text = newTitle;
    displayTodos();
}

// Function to display todos in the list
function displayTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                onchange="toggleComplete(${index})">
            <span ${todo.completed ? 'style="text-decoration: line-through;"' : ''}>
                ${todo.text}
            </span>
            <button class="delete" onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(listItem);
    });
}

// Initial display of todos
displayTodos();
