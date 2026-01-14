import { useEffect, useState } from "react";
import Task from "./Task";
function TaskList() {

    const [tasks, setTasks] = useState([])
    const [error, setError] = useState("")

    const fetchData = async () => {
        try {
            const response = fetch("http://localhost:3000/tasks")
            if (!response.ok) {
                    throw new Error(`Error! Response status: ${response.status}`);
                }
                 const result = await response.json();
                 setTasks(result)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchData();
    },[])


  return (
    <>
      <div>
        <h1>Task List</h1>
        <button>+ Add Task</button>
      </div>

      <div>
        {/* <div>{error}</div> */}
        <div>
            {tasks.map((task) => {
                <Task task={task}/>
            })}
        </div>
      </div>
    </>
  );
}

export default TaskList;
