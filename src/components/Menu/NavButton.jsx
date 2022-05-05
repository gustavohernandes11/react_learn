import React from 'react'
import './menu.css'
import { Link } from "react-router-dom";

export default function NavButton(props) {
    return (
        <Link to={`${props.path}`}>
            <div className="navbutton"> 
            {props.children}
        </div>
        </Link >
    )
}