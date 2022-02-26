import React from "react"
import { FaBars } from "react-icons/fa"
import { useGlobalContext } from "./context"

export default function Home(){
    const {openSideBar , openModal}=useGlobalContext();
    return(
        <main>
        <button className="sidebar-toggle" onClick={openSideBar}>
            <FaBars />
        </button>
        <button className="btn" onClick={openModal}>
            show Modal
        </button>
        </main>
    )
}