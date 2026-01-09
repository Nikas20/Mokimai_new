import './App.css'
import robots from "./components/robots"
import Robot from './components/Robot'

function App() {


const prodctRobot = robots.map((robot) => {
    return <Robot name={robot.name} email={robot.email} avatar={robot.avatar} reserved={robot.reserved} key={robot.id}/>
  })

  return (
    <>
    <h1>ROBOFRIENDS</h1>
    <input type="text" placeholder='searh for robot' className='mb-2 border-green-600 border-2'/>
    <div className='grid grid-cols-3 gap-4'>
      {prodctRobot}
    </div>
    </>
  )
}

export default App
