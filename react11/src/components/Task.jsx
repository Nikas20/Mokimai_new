import { useRef, useState } from "react";
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

  const [statusText, setStatusText] = useState("To Do")

  const StatusChange = () => {
      if (task.status == 0) {
      setStatusText("In Progress")
      task.status = 50
    } else if (task.status == 50) {
      setStatusText("Done")
      task.status = 100
    }else if (task.status == 100) {
      setStatusText("To Do")
      task.status = 0
    }
    
  }
 
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
            <button onClick={StatusChange}>{statusText}</button>
            {/* Progress status */}

            <div className="radial-progress" style={{"--value":task.status} /* as React.CSSProperties */ } 
  aria-valuenow={task.status} role="progressbar"></div>
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