import { useEffect, useState } from "react"

function Robot(props) {

    const {name, email, avatar, reserved} = props


    const [reserv, setReserv] = useState(false)
console.log(reserv);

useEffect(() => {
  setReserv(reserved)
}, [reserved])

    function click() {
        setReserv(prev => !prev)
    }

    return(
        <>
<div className={reserv ? "bg-gray-500 pb-2" : "bg-blue-500 pb-2"}>
       <img src={avatar} alt="robotAvatar" /> 
       <p>{name}</p>
       <p>{email}</p>
       <button onClick={click}>{reserv ? "Reserved" : "Reserve"}</button>
</div>
        </>
    )
}
export default Robot