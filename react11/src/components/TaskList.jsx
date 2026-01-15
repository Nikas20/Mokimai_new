import { useEffect, useRef, useState } from "react";
import Task from "./Task";
import TaskAdd from "./TaskAdd";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const modalRef = useRef(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      if (!response.ok) {
        throw new Error(`Error! Response status: ${response.status}`);
      }
      const result = await response.json();
      setTasks(result);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal(); // open modal via native dialog
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close(); // close modal
    }
  };

  return (
    <>
      <main className="mx-20 pb-5">
        <div className="flex justify-between py-5">
          <h1 className="text-3xl font-bold">Task List</h1>
          <button
            onClick={openModal}
            className="bg-blue-600 text-white p-1 w-32 rounded-lg"
          >
            + Add Task
          </button>
        </div>

        {error && <div className="text-red-600">{error}</div>}

        <div className="grid grid-cols-1 gap-5">
          {tasks.map((task) => (
            <Task task={task} key={task.id} fetchData={fetchData} />
          ))}
        </div>

        {/* daisyUI Modal */}
        <dialog ref={modalRef} className="modal">
          <div className="modal-box">
            <div className="modal-action">
              <button
                onClick={closeModal}
                className="btn bg-white border-0 absolute text-2xl font-bold hover:border-0"
              >
                X
              </button>
            </div>
            <TaskAdd fetchData={fetchData}   closeModal={closeModal}/>
            
          </div>
        </dialog>
      </main>
    </>
  );
}

export default TaskList;
