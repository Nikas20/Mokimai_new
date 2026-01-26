import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getOne } from "../service/get";
import { Link } from "react-router";
function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  const fetchTask = async () => {
    try {
      const result = await getOne(id);
      setTask(result);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const { title, description, dueDate, priority, category, status } = task;

  return (
    <>
      {error && <p>{error}</p>}
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>{dueDate}</h3>
        <h3>{priority}</h3>
        <h3>{category}</h3>
        <h3>{status}</h3>
      </main>
    </>
  );
}

export default TaskDetails;
