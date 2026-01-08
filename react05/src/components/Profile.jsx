function Profile(props) {
    const {isLoggedIn} = props

return (
    <>
    {isLoggedIn ? (<button>Profile</button>) 
    : (
        <div>
    <button>Log In</button> 
    <button>Sign Up</button>
    </div>
    )}

</>
)
}

export default Profile