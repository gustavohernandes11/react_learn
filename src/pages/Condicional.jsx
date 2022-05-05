import React, { useState } from 'react'

export default function Condicional() {
    let [isHide, setIsHide] = useState(false);


    return (
        <>
            <h2>Rederização condicional</h2>
            {isHide
                ? <button className="mb-2" onClick={() => setIsHide(!isHide)} >Mostrar</button>
                : <><button className="mb-2" onClick={() => setIsHide(!isHide)} >Esconder</button>
                    <div className="box flexcenter mt-2">
                        Está visível
                    </div></>}



        </>
    )

}