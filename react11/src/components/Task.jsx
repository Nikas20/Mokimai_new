function Task({task}) {
    const{taskName, priority,status} = task
    return (
        <>
        <div id="task" key={task}>
            <div>
                <p>Task</p>
                <p>{taskName}</p>
            </div>
            <div>
                <p>Priority</p>
                <p>{priority}</p>
            </div>
            <div>
            <button>To Do</button>
            {/* <img src="" alt="" /> */}
            <p>{status}</p>
            </div>
            <button>Edit</button>
            <button>Delite</button>
        </div>
        </>
    )
}
export default Task