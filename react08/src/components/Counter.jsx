import { useState } from "react"

export function Counter() {
    const [number, setNumber] = useState(0)
    function increment() {
        setNumber(number + 1)
    }
    function decrement() {
        setNumber(number - 1)
    }
    return(
        <>
        <h1>{number}</h1>
        <div>
            <button onClick={increment}>Increment</button>

            <button onClick={decrement}>Decrement</button>
        </div>
        </>
    )

} 
export function CounterMult() {
    const [number, setNumber] = useState(0)
    function increment() {
        setNumber(number + 1)
    }
    function decrement() {
        setNumber(number - 1)
    }
    return(
        <>
        <h1>{number}</h1>
        <div>
            <button onClick={increment}>Increment</button>

            <button onClick={decrement}>Decrement</button>
        </div>
        </>
    )
}
export default Counter; CounterMult