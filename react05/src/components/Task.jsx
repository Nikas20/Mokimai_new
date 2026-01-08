import Notification from "./Notification"

function Task(props) {
    const {nameTask, type} = props
    return (
        <>
        <p>{nameTask}</p>
        <Notification type = {type}/>
        </>
    )
}

export default Task