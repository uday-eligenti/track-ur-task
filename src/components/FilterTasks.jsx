import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, CardBody, CardFooter, CardHeader } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Loader } from "./Loader";
import TaskModal  from "./Modal";
const FilterTasks = () => {
  const [status, setStatus] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [deleteTask,setDeleteTask] = useState(null);
  const { tasks, updateTaskStatus, removeTask, loading, error } =
    useContext(TaskContext);
  const filteredTasks = tasks.filter((task) => {
    if (status === "all") return true;
    return task.status === status;
  });
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  const handleStatusToggle = (task) => {
    const updatedTask = {
      ...task,
      status: task.status === "completed" ? "pending" : "completed",
    };
    updateTaskStatus(updatedTask);
  };
  const handleDelete = (task)=>{
    setDeleteTask(task)
    setShowModal(true)
  }
  const statues = ["all", "completed", "pending"];
  return (
    <div className="">
      <div className="p-3 d-flex justify-content-center gap-3">
        {statues.map((stat, i) => {
          return (
            <button
              className={
                stat === status
                  ? "btn btn-secondary text-dark"
                  : "btn btn-dark text-light"
              }
              onClick={() => setStatus(stat)}
              key={i}
            >
              {stat.charAt(0).toUpperCase() + stat.substring(1, stat.length)}
            </button>
          );
        })}
      </div>
      <Row xs={1} md={3} className="m-3">
        {showModal && <TaskModal task={deleteTask} showModal={showModal} setShowModal={setShowModal}/>}
        {filteredTasks &&
          filteredTasks.length > 0 &&
          filteredTasks.map((task, index) => (
            <Col key={task.id} className="mb-3">
              <Card className="mt-2">
                <CardHeader className="bg-dark text-light">
                  {task.description}
                </CardHeader>
                <CardBody className="d-flex justify-content-between">
                  <Form.Check
                    type="switch"
                    className=""
                    id="custom-switch"
                    checked={task.status === "completed"}
                    onChange={() => handleStatusToggle(task)}
                    label={
                      task.status === "pending"
                        ? "Mark as Completed"
                        : "Mark as Pending"
                    }
                  />
                  <button
                    className="btn btn-danger"
                    onClick={()=>handleDelete(task)}
                  >
                    Delete
                  </button>
                </CardBody>
                <CardFooter
                  className={
                    task.status === "completed"
                      ? "text-success"
                      : "text-warning"
                  }
                >
                  Status - {task.status} user- {task.userId}
                </CardFooter>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default FilterTasks;
