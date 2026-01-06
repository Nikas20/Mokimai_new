import hexaColor from "./components/color_generator"
import './App.css'

function App() {

  return (
    <>
      <p style={{backgroundColor:hexaColor()}} className="my-1">{hexaColor()}</p>
      <p style={{backgroundColor:hexaColor()}} className="my-1">{hexaColor()}</p>
      <p style={{backgroundColor:hexaColor()}} className="my-1">{hexaColor()}</p>
      <p style={{backgroundColor:hexaColor()}} className="my-1">{hexaColor()}</p>
      <p style={{backgroundColor:hexaColor()}} className="my-1">{hexaColor()}</p>
    </>
  )
}

export default App
