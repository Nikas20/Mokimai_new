import { useState } from "react";

function UserType() {
    const [userType, setUserType ]= useState(" ")

    return (<>
    <form action="">
        <select onChange={(e)=> {setUserType(e.target.value)}}>
            <option value="student">student</option>
            <option value="teacher">teacher</option>
        </select>
        <br />
        {userType == "student" ? <input type="text" placeholder="Grade"/> : userType == "teacher" ? <input type="text" placeholder="Subject"/> : ""}
</form>
        </>
    )
}



export default UserType