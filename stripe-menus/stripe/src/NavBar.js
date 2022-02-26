import React from "react"
import logo from './stripe.svg'
import { useGlobalContext } from "./context"
import { FaBars } from "react-icons/fa"

export default function NavBar(){
    const {closeModal , openModal,openSideBar}=useGlobalContext();
    function displaySubmenu(e){
        const page=e.target.textContent;
        const tempBtn=e.target.getBoundingClientRect();
        const center=(tempBtn.left + tempBtn.right)/2;
        const bottom =tempBtn.bottom-3;
        openModal(page,{center , bottom});
    }
    function handleSubmenu(e){
     if(!e.target.classList.contains('link-btn')){
         closeModal()
     }
    }
    return(
        <nav className="nav" onMouseOver={handleSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt='' className="nav-img"/>
                    <button className="btn toggle-btn" onClick={openSideBar}><FaBars /></button>

                </div>
                <ul className="nav-links">
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>
                            products
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>
                            company
                        </button>
                    </li>
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </div>

        </nav>
    )
}