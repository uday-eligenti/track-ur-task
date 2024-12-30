import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
export const Header = () => {
    const { logout } = useContext(TaskContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logout();
        navigate("/login");
      };
  return (
    <Navbar className="bg-body-tertiary border border-b-danger mb-2">
      <Navbar.Brand href="/" className='d-flex w-50 justify-content-center align-items-center'>
        <img
          alt=""
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top img-rounded mx-3"
        />{' '}
        Track ur Tasks
      </Navbar.Brand>
      <button className="btn btn-secondary" onClick={handleLogOut}>
        Logout
      </button>
  </Navbar>
  )
}
