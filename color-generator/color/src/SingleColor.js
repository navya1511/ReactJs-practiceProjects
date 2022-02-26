import React from "react";
import rgbToHex from "./utils";

export default function SingleColor({rgb , weight , index , hexColor}){
    const [alert , setAlert]=React.useState(false);
    const bcg = rgb.join(',');
    
    const hex=rgbToHex(...rgb)
    const hexValue=`#${hexColor}`


    React.useEffect(()=>{
     const timeout=setTimeout(()=>{
         setAlert(false)
     },3000)
     return ()=>clearTimeout(timeout)
    },[alert])

   return(
    <article
     className={`color ${index>10 && 'color-light'}`}
     style={{backgroundColor:`rgb(${bcg})`}}
     onClick={()=>{
         setAlert(true)
        navigator.clipboard.writeText(hexValue)
        }}
    
    >
   <p className="percent-value">
       {weight}%
   </p>
   <p className="color-value">
       {hexValue}
   </p>
    {alert && <p className="alert">copied to clipboard</p>}
    </article>
   )
}