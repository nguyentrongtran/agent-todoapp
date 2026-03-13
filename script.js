// Get elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new todo
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === '') return;

    // Create list item
    const li = document.createElement('li');

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create span for text
    const span = document.createElement('span');
    span.textContent = todoText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // Add delete functionality
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    // Add toggle completion functionality
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed');
    });

    // Append elements to li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Append li to ul
    todoList.appendChild(li);

    // Clear input
    todoInput.value = '';
}

// Event listener for add button
addBtn.addEventListener('click', addTodo);

// Event listener for enter key in input
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});</content>
<parameter name="filePath">D:\Data\MOOC\VibeCode\ToDoList\todo-app\script.js