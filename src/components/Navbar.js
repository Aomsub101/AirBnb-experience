import React from "react"
import logo from "../images/airbnb-logo.png"
export default function Navbar(){
    return(
        <nav>
            <img src={logo} className="nav--logo" alt="airbnb-logo"/>
        </nav>
    )
}