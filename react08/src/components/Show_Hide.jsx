import { useState } from "react"

function Show_Hide() {
    const [visible, setVisible] = useState(false)
    function viblityChange() {
        setVisible(!visible)
    }
    return(
        <>
        <p className={visible ? "visibility: visible;" :"visibility: hidden"}>Buu</p>
        <button onClick={viblityChange}>magic</button>
        </>
    )
}

export default Show_Hide