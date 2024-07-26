import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      setError('Title is required.');
      return;
    }

    try {
      await axios.post('http://localhost:5001/api/Task', {
        title,
        description,
        status
      });
      fetchTasks();
      setTitle('');
      setDescription('');
      setStatus('ToDo');
      setError('');
    } catch (err) {
      console.error('Error creating task', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="0">To Do</option>
          <option value="1">In Progress</option>
          <option value="2">Done</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;