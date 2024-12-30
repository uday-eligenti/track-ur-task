# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

React + Vite App
This is a simple React application powered by Vite. This template includes the basic setup for React, Vite, and essential development tools to get you started quickly.

Here are the step by step instructions to run the app

1.Clone the repository:

git clone https://github.com/uday-eligenti/track-ur-task.git
cd track-ur-task

2.Install dependencies:

Once inside the project directory, run:

npm install

This will install all the dependencies specified in package.json.

Running the Development Server
To start the application in development mode, run:

npm run dev

This will start the Vite development server. The app should be accessible at http://localhost:5173/.

You can now start modifying the application, and Vite will automatically reload the page to reflect changes.

Overview:
The task management app allows users to perform basic task management functions: adding tasks, deleting tasks, toggling task completion status, and filtering tasks based on their completion status. The app uses localStorage to persist tasks, and each user is identified by a unique userId, which they enter to log in. The app only shows tasks for the logged-in user and allows them to manage their tasks accordingly.

Approach:
1. User Authentication (Login):
The user logs in by entering a userId. This userId is stored temporarily in the app's state and is used to filter and associate tasks with the correct user.
The app does not involve external authentication, and the userId is treated as a simple login mechanism.

2. Task Management Features:
Add Task: Users can enter a task description and add it to the list. Each task is stored in localStorage with an associated userId, ensuring that tasks are isolated per user.

Delete Task: Users can delete tasks from the list. The task is removed from both the UI and localStorage.

Toggle Task Completion: Each task has a completion status, which can be toggled between "pending" and "completed". The status is updated in localStorage, and the UI reflects this change.

Filter Tasks by Status: Users can filter tasks based on their completion status (i.e., show only "pending" or "completed" tasks). This allows users to focus on either unfinished or finished tasks.

3. Storing and Managing Tasks in localStorage:

The tasks are stored as an array of objects in localStorage. Each task has:
id (unique task identifier)
description (task content)
status (either "pending" or "completed")
userId (associates the task with a specific user)
When the app is loaded or refreshed, tasks are retrieved from localStorage and filtered by the current userId.




