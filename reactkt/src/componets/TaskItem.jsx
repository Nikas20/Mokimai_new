import { deleteData } from "../service/delete";
import { Link } from "react-router";
import { upadateData } from "../service/patch";
function TaskItem({ task, fetchData }) {
  const { id, title, dueDate, priority, category, status } = task;

  const deliteData = async (id) => {
    try {
      deleteData(id);
    } catch (error) {
      alert(error.message);
    }
  };

  const changeStatus = async (id) => {
    if (status == "ToDo") {
      try {
        const changedData = await upadateData(id, { status: "InProgress" });
        if (changedData) {
          alert("Changed ii to InProgress");
          fetchData();
        }
      } catch (error) {
        alert(error.message);
      }
    } else {
      try {
        const changedData = await upadateData(id, { status: "Done" });
        if (changedData) {
          alert("Changed ii to Done");
          fetchData();
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <>
      <div className="bg-amber-200 p-1">
        <p className="bg-red-100">{title}</p>
        <p className="bg-red-100">{dueDate}</p>
        <p className="bg-red-100">{priority}</p>
        <p className="bg-red-100">{category}</p>
        <p className="bg-red-100">{status}</p>
        <div className="flex flex-col mt-1 gap-1">
          <button onClick={() => changeStatus(id)}>Change</button>
          <Link to={`/task/${id}`} className="bg-violet-100">
            More Info
          </Link>
          <Link to={`/edit-task/${id}`} className="bg-green-100">
            Edit Task
          </Link>
          <button onClick={() => deliteData(id)}>Delite</button>
        </div>
      </div>
    </>
  );
}
export default TaskItem;
