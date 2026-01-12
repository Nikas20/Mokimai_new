import { useState } from "react"

function Toggle() {
    const [status, setStatus] = useState(true) 
    function change() {
        setStatus(!status)
    }
    return(
        <button className={status ? "bg-green-500" : "bg-red-500"} onClick={change}>{status ? "ON" : "OFF"}</button>
    )
}
export default Toggle