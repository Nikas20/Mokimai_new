import './App.css'
import Login from './components/Login'
import { useState } from 'react'
import UserContext from './UserContext'
import Dashboardd from './components/Dashboardd'
function App() {
  const [user, setUser] = useState(
    {
      name: "Viktor",
      role: "admin"
    }
  )

  const setnewUser = (user) => {
    setUser(user)
    localStorage.setItem("logedInUser", JSON.stringify(user))
  }

  return (
    <>
      <UserContext value={{ user, setnewUser }}>
        <Login />
        <Dashboardd />
      </UserContext>
    </>
  )
}

export default App
