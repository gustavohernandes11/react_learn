import React from 'react'
import './menu.css'
import NavButton from './NavButton.jsx'

export default function Menu() {
    return (
        <div className="menu flexcolumn">
            <b><p className="mb-4">Menu de navegação</p></b>
            <NavButton path="/">Intodução</NavButton>
            <NavButton path="/react-router">React Router</NavButton>
            <NavButton path="/Hooks">React Hooks</NavButton>
            <NavButton path="/listas">Listas</NavButton>
            <NavButton path="/condicional">Renderização condicional</NavButton>
            <NavButton path="/input">Pegando o valor do input</NavButton>
            <NavButton path="/selecionar">Pegando elemento de listas</NavButton>
            {/* <NavButton path="/redux">Redux</NavButton> */}
        </div>
    )
}
