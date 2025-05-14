import React, { use, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count +1);
    }               
    const reset = () => {
        setCount(0);
    };
    const decrement = () => {
        setCount(count - 1);
    };



    
    return (
        <div style={{ padding: 40 }}>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    );
};
export default Counter;