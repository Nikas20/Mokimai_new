import { useState } from "react";

function Modal() {
    const [isOpen, setIsOpen] = useState(false)
    function click() {
        {isOpen == false ? setIsOpen(true) : setIsOpen(false)}
    }
    return(
        <>
        <button onClick={click}>Dont click me</button>

        <h1>{isOpen ? "Valentiniano" : ""} </h1>
        
        </>
    )
}

export default Modal