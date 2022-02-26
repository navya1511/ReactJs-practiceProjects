import React from "react";

export default function Alert({msg, type, removeAlert, list}){
    React.useEffect(()=>{
    const timeout=setTimeout(()=>{
    removeAlert();
    },3000)
    return ()=>clearTimeout(timeout);
    },[list])
    return(
    <p className={`alert alert-${type}`}>{msg}</p>
    )
}