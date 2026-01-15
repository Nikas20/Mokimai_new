import { useRef } from "react";
import TaskDelete from "./TaskDelete";
function Task({task, fetchData} ) {
      const modalRef = useRef(null);

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
        <main>
        <div id="task" key={task.id} className="flex justify-between bg-white p-5 rounded-2xl">
            <div>
                <p>Task</p>
                <p>{task.taskName}</p>
            </div>
            <div>
                <p>Priority</p>
                <p>{task.priority}</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
            <button>To Do</button>
            {/* <img src="" alt="" /> */}
            <p>{task.status}</p>
            </div>
            <button>Edit</button>
            <button onClick={openModal}
            className="bg-blue-600 text-white p-1 w-32 rounded-lg">Delite</button>
        </div>
         {/* daisyUI Modal */}
        <dialog ref={modalRef} className="modal">
          <div className="modal-box">
            <div className="modal-action">
              
            </div>
            <div>
            <TaskDelete
  fetchData={fetchData}
  task={task}
  closeModal={closeModal}
/>

            <button
                onClick={closeModal}
                className="btn float-end mt-2"
              >
                Close
              </button>
              </div>
          </div>
        </dialog>
        </main>
        </>
    )
}
export default Task