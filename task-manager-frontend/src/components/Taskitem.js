// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const handleStatusChange = (e) => {
    updateTask(task.id, { ...task, status: e.target.value });
  };

  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <select value={task.status} onChange={handleStatusChange}>
        <option value="ToDo">To Do</option>
        <option value="InProgress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
