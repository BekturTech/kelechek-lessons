import { useState } from 'react';
import './counter.scss';


function Counter() {
    const [count, setCount] = useState(0)

    function decrementCount() {
        setCount((prevCount) => prevCount - 1);
        
    }

    function growthCount() {
        setCount((prevCount) => prevCount + 1);
    }

     return (
        <div className="counter">
            <button onClick={decrementCount}>-</button>
            <strong>{count}</strong>
            <button onClick={growthCount}>+</button>
        </div>
    )
}

export default Counter