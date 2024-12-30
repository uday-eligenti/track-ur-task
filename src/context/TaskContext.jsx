// TaskContext.js

import React, { createContext, useState, useEffect } from 'react';
import { getTasksFromLocalStorage, addTask, updateTask, deleteTask, RemoveUserFromLocalStorage } from '../data/localStorage';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const storedTasks = getTasksFromLocalStorage(storedUser.id);
      setUser(storedUser);
      setTasks(storedTasks);
    } catch (err) {
      setError('Failed to load tasks or user');
    } finally {
      setLoading(false);
    }
  }, []);

  const addNewTask = (task) => {
    addTask(task);
    setTasks(getTasksFromLocalStorage(user?.id));
  };

  const updateTaskStatus = (updatedTask) => {
    updateTask(updatedTask);
    setTasks(getTasksFromLocalStorage(user?.id));
  };

  const removeTask = (id) => {
    deleteTask(id);
    setTasks(getTasksFromLocalStorage(user?.id));
  };

  const logout = ()=>{
    RemoveUserFromLocalStorage();
    setUser(null)
  }

  return (
    <TaskContext.Provider value={{ tasks, user, addNewTask, updateTaskStatus, removeTask, logout,  loading, error }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
