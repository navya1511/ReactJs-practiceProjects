import React from "react"
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

export default function NavBar(){
    return (
        <nav className="nav-bar">
            <div className="nav-center">
                <Link to='/'>
                <img src={logo} alt="" className="logo"/>
                </Link>
                 <ul className="nav-links">
                    <li>
                        <Link to='/'>Home</Link>
                        {/* <a href="#">Home</a> */}
                    </li>
                <li>
                <Link to='/about'>About</Link>
                {/* <a href="#">About</a> */}
                </li>
                </ul> 
            </div>
        </nav>
    )
}