import TaskItem from "./TaskItem";
import { useContext } from "react";
import TaskContext from "../TaskContext";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function TaskList() {
  const { tasks, fetchData, error } = useContext(TaskContext);

  const doneTask = "Done";
  const toDoTask = "ToDo";

  const [typeFilteringType, setFilteringType] = useState("All");

  const changeFilterAll = () => {
    setFilteringType("All");
  };
  const changeFilterDone = () => {
    setFilteringType("Done");
  };

  const changeFilterInProgress = () => {
    setFilteringType("InProgress");
  };

  const changeFilterToDo = () => {
    setFilteringType("ToDo");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main>
        {error && <p>{error}</p>}
        <p className="mb-10">AllRecipes</p>
        <Link to={"/add-task"}>Add Task</Link>
        <div>
          <button onClick={changeFilterToDo}>ToDo</button>
          <button onClick={changeFilterInProgress}>InProgress</button>
          <button onClick={changeFilterDone}>Done</button>
          <button onClick={changeFilterAll}>All</button>
        </div>

        <div className="grid grid-cols-6 gap-1">
          {typeFilteringType == "All"
            ? tasks
                .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
                .map((task) => (
                  <TaskItem key={task.id} task={task} fetchData={fetchData} />
                ))
            : typeFilteringType == "Done"
              ? tasks
                  .filter((task) => task.status == "Done")
                  .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
                  .map((task) => (
                    <TaskItem key={task.id} task={task} fetchData={fetchData} />
                  ))
              : typeFilteringType == "ToDo"
                ? tasks
                    .filter((task) => task.status == "ToDo")
                    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
                    .map((task) => (
                      <TaskItem
                        key={task.id}
                        task={task}
                        fetchData={fetchData}
                      />
                    ))
                : tasks
                    .filter((task) => task.status == "InProgress")
                    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
                    .map((task) => (
                      <TaskItem
                        key={task.id}
                        task={task}
                        fetchData={fetchData}
                      />
                    ))}
        </div>
      </main>
    </>
  );
}
export default TaskList;
