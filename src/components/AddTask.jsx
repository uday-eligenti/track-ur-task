import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Card, CardBody, CardHeader } from "react-bootstrap";
const AddTask = () => {
  const [description, setDescription] = useState("");
  const { addNewTask, user } = useContext(TaskContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), description, status: "pending", userId:user?.id };
    addNewTask(newTask);
    setDescription("");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
        <Card className="col-md-6 col-12 mt-4 mb-4 d-flex flex-column align-items-center pb-3">
          <CardHeader className="w-100 bg-dark text-white text-center">
            Add Task - {user?.id}
          </CardHeader>
          <CardBody>
            <Form
              className="d-flex flex-column align-items-center"
              onSubmit={handleAddTask}
            >
              <InputGroup className="mb-3">
                <InputGroup.Text id="Task">Task</InputGroup.Text>
                <Form.Control
                  required
                  aria-label="Task"
                  aria-describedby="Task"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Task description"
                  className="col-6"
                />
              </InputGroup>
              <button type="submit" className="btn btn-dark text-light">
                Add Task
              </button>
            </Form>
          </CardBody>
        </Card>
    </div>
  );
};

export default AddTask;
