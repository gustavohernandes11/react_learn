import React, { useState } from 'react'

export default function SelecionarElemento() {
    let [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    let [selectedElement, setSelectedElement] = useState('')

    return (
        <>
            <h2>Pegando elemento de listas</h2>
            <pre> {`
            let [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            list.map(e => <div className="box flexcenter">e</div>)
            `}
            </pre>
            <span className="flexrow">
                {
                    list.map((e, i) => <div onClick={() => setSelectedElement(e)} className="box flexcenter">{e}</div>)
                }
            </span>
            <p>
                Caixa selecionada: {selectedElement}
            </p>
        </>
    )

}