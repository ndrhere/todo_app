import React, { createContext, useState, useEffect } from 'react';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleStatus = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: task.status === 'Completed' ? 'Not Completed' : 'Completed' } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
