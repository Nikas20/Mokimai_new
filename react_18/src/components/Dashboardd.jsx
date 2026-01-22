import { useContext } from "react"
import UserContext from "../UserContext"
function Dashboardd() {
    const {user} = useContext(UserContext)
    
    return(
        <div>
        <h1>Admin Dashboardd</h1>
        <p>{user.name}</p>
        <p>{user.role}</p>
        </div>
    )
}

export default Dashboardd