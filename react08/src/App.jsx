import './App.css'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import DynamicInputField from "./components/DynamicInputField"
import Show_Hide from "./components/Show_Hide"
import Management from './components/Management'
import MultipleCounters from './components/MultipleCounters'
function App() {


  return (
    <><div>
      <Counter />
      </div>
      <br />
      <div>
        <Toggle />
      </div>
      <br />
      <div>
        <DynamicInputField />
      </div>
      <br />
      <div>
        <Show_Hide />
      </div>
      <div>
        <Management />
      </div>
      <div>
        <MultipleCounters />
      </div>
    </>
  )
}

export default App
