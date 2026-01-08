import Loading from "./Loading"
function User(props) {
    const {userName, isLoggedIn, isLoading} = props
    const result = isLoggedIn ? `Welcome, ${userName}!` : "Please log in"
    return(

        <h1>{isLoading ? <Loading/> : result}</h1>
       
    )
}

export default User

// {isLoggedIn ? `Welcome, ${userName}!` : "Please log in"}