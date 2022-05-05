import React, { useState } from 'react'

export default function Hooks() {
    let [count, setCount] = useState(0);
    let list = []
    for (let i = 0; i < count; i++) {
        list.push(`elemento ${i+1} `)
            }

    return (
        <>
            <h2>Rederização de listas</h2>
            <h3>Resultado</h3>
            <p>count: {count}</p>
            <p>list: {list}</p>
            
            
            <div className="flexcolum">
                <button className="mr-1" onClick={() => setCount(count + 1)}>+1</button>
                <button onClick={() => setCount(count - 1)}>-1</button>
            </div>

</>
    )

}