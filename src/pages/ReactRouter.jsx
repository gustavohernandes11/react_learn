import React from 'react'
import './pages.css'

export default function ReactRouter() {
    return (
        <>
            <h2>React Router</h2>
            <h3>Instalação</h3>
            <pre>npm install react-router-dom@6</pre>
            <h3>Aplicando</h3>
            <p> No arquivo index.js: </p>

            <p> {`Envolva sua tag <App /> em <BrowserRouter>`} </p>

            <p>{`No elemento que deve ter o conteúdo das rotas: `}</p>
            <pre>

                <p> {
                    `<Routes> 
                <Route path="/" element={<Introducao />} /> 
                <Route path="react-router" element={<ReactRouter />} />
            </Routes>`
                }
                </p>
            </pre>





        </>
    )

}