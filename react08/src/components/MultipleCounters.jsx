import { useState } from "react"

function MultipleCounters() {
    
        const [number1, setNumber1] = useState(0)
        const [number2, setNumber2] = useState(0)
        function increment1() {
            setNumber1(number1 + 1)
        }
        function decrement1() {
            setNumber1(number1 - 1)
        }
        function increment2() {
            setNumber2(number2 + 1)
        }
        function decrement2() {
            setNumber2(number2 - 1)
        }
        function reset() {
            setNumber1(0)
            setNumber2(0)
        }
    
    return(
         <>
            <h1>{number1}</h1>
            <div>
                <button onClick={increment1}>Increment</button>
    
                <button onClick={decrement1}>Decrement</button>
            </div>

            <h1>{number2}</h1>
            <div>
                <button onClick={increment2}>Increment</button>
    
                <button onClick={decrement2}>Decrement</button>
            </div>

            <button onClick={reset}>Reset</button>
            </>
    )
}

export default MultipleCounters