import React, { useState } from 'react'

export default function Input() {
    let [inputValue, setInputValue] = useState('');


    return (
        <>
            <h2>Alterar state pelo input</h2>
            <input 
            type="text" 
            name="input" 
            id="input" 
            placeholder="Digite um valor" 
            onChange={e => setInputValue(e.target.value)} />

            <p>Valor digitado: {inputValue}</p>


        </>
    )

}