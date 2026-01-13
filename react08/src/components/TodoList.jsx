import { useState } from "react"

function TodoList() {
    const [tasks, setTasks] = useState([])
    const [text, setText] = useState("")

    function newTask(e) {
       setText(e.target.value)
    }

    function addTask() {
        setTasks([...tasks, text])
        
        
    }

    return(
        <>
        <div>
        {tasks}
        </div>
        <div>
        <input type="text" value={text} onChange={newTask}/>
        </div>
        <button onClick={addTask}>Add Task</button>
        </>
    )
}
export default TodoList