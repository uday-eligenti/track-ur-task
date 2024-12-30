// // App.js

import React from "react";
import { TaskProvider } from "./context/taskContext";
import Login from "./components/Login";
import AddTask from "./components/AddTask";
import FilterTasks from "./components/FilterTasks";
import { BrowserRouter as Router, Route, Routes , Navigate} from "react-router-dom";
import { Header } from "./components/Header";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/tasks" /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route
          path="/tasks"
          element={user ? (
            <div className="" style={{minHeight:'100vh', minWidth:"100vw"}}>
              <Header/>
              <AddTask />
              <FilterTasks />
            </div>
          ) : (
            <Navigate to="/login" />
          )}
        />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
