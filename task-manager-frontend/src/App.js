// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/Task');
      setTasks(response.data);
    } catch (err) {
      console.error('Error fetching tasks', err);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      await axios.put(`http://localhost:5001/api/Task/${id}`, updatedTask);
      fetchTasks();
    } catch (err) {
      console.error('Error updating task', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/Task/${id}`);
      fetchTasks();
    } catch (err) {
      console.error('Error deleting task', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = statusFilter === 'All'
    ? tasks
    : tasks.filter(task => task.status === statusFilter);

  return (
    <div className="App">
      <TaskForm fetchTasks={fetchTasks} />
      <Filter status={statusFilter} setStatus={setStatusFilter} />
      <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
