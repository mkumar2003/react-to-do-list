// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('none');
  const [error, setError] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
      setError('');
    } else {
      setError('Task cannot be empty');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const getFilteredTasks = () => {
    let filteredTasks = tasks;

    if (filter === 'completed') {
      filteredTasks = filteredTasks.filter(task => task.completed);
    } else if (filter === 'incomplete') {
      filteredTasks = filteredTasks.filter(task => !task.completed);
    }

    if (sortOrder === 'alphabetical') {
      filteredTasks = filteredTasks.sort((a, b) => a.text.localeCompare(b.text));
    }

    return filteredTasks;
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
        {error && <div className="error">{error}</div>}
      </div>
      <div className="task-controls">
        <label>
          Filter:
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </label>
        <label>
          Sort:
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="none">None</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </label>
      </div>
      <div className="task-section">
        <h2>Tasks</h2>
        <ul className="task-list">
          {getFilteredTasks().map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <span>{task.text}</span>
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
