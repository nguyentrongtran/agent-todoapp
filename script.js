document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Hàm thêm công việc
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const li = document.createElement('li');
        li.className = 'todo-item';

        const span = document.createElement('span');
        span.textContent = todoText;
        span.addEventListener('click', function() {
            span.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Xóa';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        todoInput.value = '';
    }

    // Sự kiện click button
    addBtn.addEventListener('click', addTodo);

    // Sự kiện enter trong input
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});