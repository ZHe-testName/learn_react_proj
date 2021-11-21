import React, { useState } from "react";

function Counter (){
    const [counter, setCounter] = useState(0);

    function increment (){
        setCounter(counter + 1);
    };

    function decrement (){
        setCounter(counter - 1);
    };

    return (
        <div style={{
                        border: '1px solid black',
                        padding: '15px',
                    }}>
            <h3>Function Component</h3>

            <h1>{counter}</h1>

            <button onClick={increment}>increment</button>

            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;