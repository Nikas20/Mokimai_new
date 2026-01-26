import { Routes, Route } from "react-router";
import { useState } from "react";
import { getAllData } from "./service/get";
import TaskContext from "./TaskContext";
import "./App.css";

import TaskList from "./componets/TaskList";
import { TaskAdd, TaskEdit } from "./componets/TaskForm";
import TaskDetails from "./componets/TaskDetails";
import Filter from "./componets/Filter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const results = await getAllData();
      setTasks(results);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <TaskContext value={{ tasks, setTasks, fetchData, error }}>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/add-task" element={<TaskAdd />} />
          <Route path="/edit-task/:id" element={<TaskEdit />} />
        </Routes>
      </TaskContext>
    </>
  );
}

export default App;
