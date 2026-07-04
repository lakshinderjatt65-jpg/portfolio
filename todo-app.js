// Get DOM elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');
const clearCompleted = document.getElementById('clearCompleted');

// Load todos from localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Render todos
function renderTodos() {
    todoList.innerHTML = '';
    
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="todo-text">${todo.text}</span>
            <div class="todo-actions">
                <button class="complete-btn"><i class="fas fa-check"></i></button>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
        `;
        
        // Add event listeners
        const checkbox = li.querySelector('.todo-checkbox');
        const completeBtn = li.querySelector('.complete-btn');
        const deleteBtn = li.querySelector('.delete-btn');
        
        checkbox.addEventListener('change', () => toggleComplete(index));
        completeBtn.addEventListener('click', () => toggleComplete(index));
        deleteBtn.addEventListener('click', () => deleteTodo(index));
        
        todoList.appendChild(li);
    });
    
    updateStats();
    saveTodos();
}

// Add new todo
function addTodo() {
    const text = todoInput.value.trim();
    
    if (text === '') {
        alert('Please enter a task!');
        return;
    }
    
    todos.push({
        text: text,
        completed: false
    });
    
    todoInput.value = '';
    renderTodos();
}

// Toggle todo completion
function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

// Delete todo
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Clear completed todos
function clearCompletedTodos() {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
}

// Update statistics
function updateStats() {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    
    totalTasks.textContent = `Total: ${total}`;
    completedTasks.textContent = `Completed: ${completed}`;
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Event listeners
addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

clearCompleted.addEventListener('click', clearCompletedTodos);

// Initial render
renderTodos();
