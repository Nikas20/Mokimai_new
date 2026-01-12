import { useState } from "react"

function DynamicInputField() {
    const [name, setName] = useState("")

    function writeName(event) {
        setName(event.target)
    }
    return(
        <>
        <h1>Hello {name}!</h1>
        
        <input type="text" value={name} onChange={writeName}/>
        
        </>
    )
}
export default DynamicInputField