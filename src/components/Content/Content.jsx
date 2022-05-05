import React from 'react'
import './content.css'
import { Routes, Route } from 'react-router-dom'
import ReactRouter from '../../pages/ReactRouter.jsx'
import Introducao from '../../pages/Introducao.jsx'
import Hooks from '../../pages/Hooks.jsx'
import Listas from '../../pages/Listas.jsx'
import Condicional from '../../pages/Condicional.jsx'
import Input from '../../pages/Input.jsx'
import SelecionarElemento from '../../pages/SelecionarElemento.jsx'


export default function Content() {
    return (
        <div className="content" >
            <h1>Essencial do React</h1>
            <Routes>
                <Route path="/" element={<Introducao />} />
                <Route path="react-router" element={<ReactRouter />} />
                <Route path="hooks" element={<Hooks />} />
                <Route path="listas" element={<Listas />} />
                <Route path="condicional" element={<Condicional />} />
                <Route path="input" element={<Input />} />
                <Route path="selecionar" element={<SelecionarElemento />} />

            </Routes>
        </div >
    )

}