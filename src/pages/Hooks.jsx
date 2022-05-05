import React, { useState, useEffect } from 'react'

export default function Hooks() {
    const [count, setCount] = useState(0);
    const [isHide, setIsHide] = useState(true);


    return (
        <>
            <h2>useState</h2>
            <div className="flexcolum">
                <p>Current state: {count}</p>
                <button onClick={() => setCount(count + 1)}>+1</button>
                <button onClick={() => setCount(count - 1)}>-1</button>
            </div>

            <h2>useEffect</h2>
            <pre>
                {` useEffect(() => {
        console.log('Componente montado')
        return () => {
            console.log('Componente desmontado')
        };
    });`}
            </pre>

        </>

    )
}