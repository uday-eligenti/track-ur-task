import React, { useState } from "react";
import { setUserToLocalStorage } from "../data/localStorage";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Loader } from "./Loader";
const Login = () => {
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [loding, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setLoading(true);

    if (!userId) {
      setError("User ID is required");
      return;
    }
      setError("");
      setLoading(false);
      const user = { id: userId, token: "dummy_token" };
      setUserToLocalStorage(user);
      navigate("/tasks");
  };

  return (
    <div className="loginContainer d-flex justify-content-center align-items-md-center align-items-sm-start" style={{minHeight:'100vh'}}>
      <div className="col-md-6 col-12 mt-4 mb-4 border d-flex flex-column align-items-center bg-info pb-3">
        <h1 className="text-center mb-5 bg-dark w-100 p-2 text-white">
          Log in
        </h1>
        <Form className="d-flex flex-column align-items-center">
          <InputGroup className="mb-3">
            <InputGroup.Text id="User ID">User Id</InputGroup.Text>
            <Form.Control
              required
              aria-label="userID"
              aria-describedby="User ID"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter User ID"
            />
          </InputGroup>
          {/* <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
        /> */}
          <button
            className="btn btn-primary"
            onClick={handleLogin}
            disabled={loding}
          >
            Login
          </button>
        </Form>
        {error && <p>{error}</p>}
        {loding && <Loader />}
      </div>
    </div>
  );
};

export default Login;
