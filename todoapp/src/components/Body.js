import React, { useEffect, useState } from "react";
import "./Body.css";

import { FaTrash, FaRegCheckSquare } from "react-icons/fa";

const Body = () => {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const fetchData = async () => {
    const res = await fetch("http://localhost:8000/tasks/getAllTasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let response = JSON.parse(await res.text());
    const penTasks = response.tasks.filter((task) => task.isDone === false);
    const donTasks = response.tasks.filter((task) => task.isDone === true);

    setPendingTasks(penTasks);
    setDoneTasks(donTasks);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="addTaskBox">
        <input type="text" placeholder="Add your task..." />
        <div className="addTaskButton">Add Task</div>
      </div>
      <div className="taskBox">
        <table>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Task</th>
              <th>category</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <thead>Pending...</thead>
          <tbody>
            {pendingTasks.map((task, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{task.taskName}</td>
                <td>{task.category}</td>
                <td>
                  {
                    new Date(task.deadLine)
                      .toLocaleString(undefined, {
                        timeZone: "Asia/Kolkata",
                      })
                      .split(",")[0]
                  }
                </td>
                <td>
                  <FaTrash
                    className="icon"
                    onClick={() => console.log("delete")}
                  />
                  <FaRegCheckSquare
                    className="icon"
                    onClick={() => console.log("Mark as done")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <thead>Done</thead>
          <tbody>
            {doneTasks.map((task, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{task.taskName}</td>
                <td>{task.category}</td>
                <td>
                  {
                    new Date(task.deadLine)
                      .toLocaleString(undefined, {
                        timeZone: "Asia/Kolkata",
                      })
                      .split(",")[0]
                  }
                </td>
                <td>
                  <FaTrash
                    className="icon"
                    onClick={() => console.log("delete")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Body;