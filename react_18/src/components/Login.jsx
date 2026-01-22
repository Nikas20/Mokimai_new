import UserContext from "../UserContext";
import { useContext } from "react";
function Login() {

    const {user, setnewUser} = useContext(UserContext);

    const newUser = {name: "Valentin", role:"guest"}

    return (
        <div>
            <h1>Login form</h1>
            <p>Loged in user: {user.name}</p>
            <button onClick={() => setnewUser(newUser)}>Login user</button>
        </div>
    )
}

export default Login;