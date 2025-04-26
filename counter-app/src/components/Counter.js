import React, { useState, useEffect } from 'react';
import './counter.css'; // Assuming you have a CSS file for styling
// Counter component to display and control a simple counter

function Counter() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false); // State to track if the counter is running

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000); // Increment every 1 second
        }
        return () => clearInterval(interval); // Cleanup interval on component unmount or when `isRunning` changes
    }, [isRunning]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {count}</h1>
            <button id='increaseBtn' onClick={() => setCount(count + 1)} className='counter-button' >Increment</button>
            <button id='decreaseBtn' onClick={() => setCount(count - 1)} className='counter-button' >Decrement</button>
            <button id='restBtn' onClick={() => setCount(0)} className='counter-button' >Reset</button>
            <button id='startBtn' onClick={() => setIsRunning(true)} className='counter-button' >Start</button>
            <button id='stopBtn' onClick={() => setIsRunning(false)} className='counter-button' >Stop</button>
        </div>
    );
}

export default Counter;