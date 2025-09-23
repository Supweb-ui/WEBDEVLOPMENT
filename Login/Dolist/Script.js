// script.js - Vanilla JS To-Do app with localStorage persistence

(() => {
  const STORAGE_KEY = 'todo_tasks_v1';
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');
  const emptyMsg = document.getElementById('empty-msg');

  // tasks: array of { id: string, text: string, completed: boolean }
  let tasks = loadTasks();

  // initial render
  renderTasks();

  // add task via form submit (handles Enter key)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addTask(text);
    input.value = '';
    input.focus();
  });

  // event delegation for toggle (checkbox change) and delete button
  list.addEventListener('change', (e) => {
    if (e.target && e.target.classList.contains('toggle')) {
      const li = e.target.closest('li');
      if (!li) return;
      const id = li.dataset.id;
      toggleCompleted(id, e.target.checked);
    }
  });

  list.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('delete-btn')) {
      const li = e.target.closest('li');
      if (!li) return;
      const id = li.dataset.id;
      deleteTask(id);
    }
  });

  // functions
  function loadTasks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error('Failed to parse tasks from storage', err);
      return [];
    }
  }

  function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  function addTask(text) {
    const task = { id: Date.now().toString(), text, completed: false };
    tasks.push(task);
    saveTasks();
    renderTasks();
  }

  function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
  }

  function toggleCompleted(id, checked) {
    const t = tasks.find(x => x.id === id);
    if (!t) return;
    t.completed = !!checked;
    saveTasks();
    renderTasks();
  }

  function renderTasks() {
    list.innerHTML = '';
    if (tasks.length === 0) {
      emptyMsg.style.display = 'block';
      return;
    } else {
      emptyMsg.style.display = 'none';
    }

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.dataset.id = task.id;

      const label = document.createElement('label');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'toggle';
      checkbox.checked = Boolean(task.completed);
      checkbox.setAttribute('aria-label', 'Mark task complete');

      const span = document.createElement('span');
      span.className = 'task-text';
      if (task.completed) span.classList.add('completed');
      span.textContent = task.text;

      label.appendChild(checkbox);
      label.appendChild(span);

      const delBtn = document.createElement('button');
      delBtn.className = 'delete-btn';
      delBtn.type = 'button';
      delBtn.setAttribute('aria-label', 'Delete task');
      delBtn.textContent = 'Delete';

      li.appendChild(label);
      li.appendChild(delBtn);
      list.appendChild(li);
    });
  }

})();