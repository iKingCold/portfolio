import { useState } from 'react'
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount((count) => count + 1)
    }

    const Decrement = () => {
        if(count === 0) return
        setCount((count) => count - 1)
    }

    return (
        <div id='counter'>
            <button onClick={() => Decrement()}>-</button>
            <button onClick={() => Increment()}>+</button>
            <p>{count}</p>
        </div>
    )
}