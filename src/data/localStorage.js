// localStorage.js

export const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user')) || null;
  };
  
  export const setUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const RemoveUserFromLocalStorage = (user) => {
    localStorage.removeItem('user', JSON.stringify(user));
  };
  export const getTasksFromLocalStorage = (userId) => {
    const data = localStorage.getItem('tasks');
    const tasks= data ? JSON.parse(data) : [];
    return tasks.filter(task => task.userId === userId);
  };
  
  export const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  export const addTask = (task) => {
    const tasks = getTasksFromLocalStorage(task.userId)
    tasks.push(task);
    saveTasksToLocalStorage(tasks);
  };
  
  export const updateTask = (updatedTask) => {
    const tasks = getTasksFromLocalStorage(updatedTask.userId)
    const index = tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = updatedTask;
      saveTasksToLocalStorage(tasks);
    }
  };
  
  export const deleteTask = (x) => {
    let tasks = getTasksFromLocalStorage(x.userId)
    tasks = tasks.filter((task) => task.id !== x.id);
    saveTasksToLocalStorage(tasks);
  };
  