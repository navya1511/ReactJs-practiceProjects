import React from "react"
import { useGlobalContext } from "./context"

export default function Submenu(){
    const {isModalOpen , location,page:{page,links}}=useGlobalContext();
    const container=React.useRef(null)
    const [columns , setColumns]=React.useState("col-2")
    React.useEffect(()=>{
        setColumns("col-2")
 const submenu = container.current;
 const { center,bottom} =location;
 submenu.style.left = `${center}px`
 submenu.style.top = `${bottom}px`
 if(links.length ===3){
     setColumns('col-3')
 }
 if(links.length>3){
     setColumns('col-4')
 }
    },[location,links])
    return(
        <aside className={`${isModalOpen ? 'submenu show':"submenu"}`} ref={container}>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
            {links.map((link,index)=>{
            const {label,icon,url}=link
            return (
                <a key={index} href={url}>
                    {icon}
                    {label}
                </a>
            )
            })}
        </div>
        </aside>
    )
}