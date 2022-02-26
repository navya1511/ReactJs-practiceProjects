import React from "react"
import { FaTimes } from "react-icons/fa"
import {links , social} from './data';
import { useGlobalContext } from "./context";
import logo from './logo.svg'


export default function SideBar(){
    const {closeSideBar , isSideBarOpen}=useGlobalContext();
    return(
        <aside className={`${isSideBarOpen?"sidebar show-sidebar":"show-sidebar"}`}>
            <div className="sidebar-header">
                <img src={logo} className="logo" alt="code-addict"/>
                <button className="close-btn" onClick={closeSideBar}>
                    <FaTimes />
                </button>

            </div>
            <ul className="links">
                {links.map((link)=>{
                    const {id , url , text , icon}=link
                    return(
                        <li key={id}>
                            <a href={url}>{icon} {text}</a>
                        </li>
                    )
                })
                }
            </ul>
            <ul className="social">
                {social.map((socialLink)=>{
                    const {id , url , icon}=socialLink;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}