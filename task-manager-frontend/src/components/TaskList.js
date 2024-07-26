// src/components/TaskList.js
import React from 'react';
import TaskItem from './Taskitem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
