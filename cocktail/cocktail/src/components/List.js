import React from "react"
import Item from "./Item"
import Loading from "./Loading"
import { useGlobalContext } from "../context"

export default function List(){
    const { loading , cocktails}=useGlobalContext();
    if(loading){
        return <Loading />
    }
    if(cocktails.length<1){
        return <h2 className="section-title">No cocktails matched your search criteria</h2>
    }
    return (
        <section className="section">
            <h2 className="section-title">
                Cocktails
            </h2>
            <div className="cocktails-center">
                {cocktails.map((item)=>{
                return <Item key={item.id} {...item}/>
                })}
            </div>
        </section>
    )
}