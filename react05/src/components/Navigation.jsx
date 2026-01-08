import { useState } from "react";

function Navigation() {
    const [isHome, setIsHome] = useState(false)
    const [isProfile, setIsProfile] = useState(false)
    const [isSettings, setIsSettings] = useState(false)

function OpenHome() {
    setIsHome(true)
    setIsProfile(false)
    setIsSettings(false)
}
function OpenProfile() {
    setIsHome(false)
    setIsProfile(true)
    setIsSettings(false)
}
function OpenSettings() {
    setIsHome(false)
    setIsProfile(false)
    setIsSettings(true)
}

    return(
    <><button onClick={OpenHome}>Home</button>
    <button onClick={OpenProfile}>Profile</button>
    <button onClick={OpenSettings}>Settings</button>


    <h1>{isHome ? "HOME" : isProfile ? "Profile" : isSettings ? "Setings" : isHome == true}</h1>
    </>)


    
}

export default Navigation