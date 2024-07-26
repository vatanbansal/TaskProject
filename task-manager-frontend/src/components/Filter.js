// src/components/Filter.js
import React from 'react';

const Filter = ({ status, setStatus }) => {
  return (
    <div>
      <label>Filter by status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="All">All</option>
        <option value="ToDo">To Do</option>
        <option value="InProgress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default Filter;
