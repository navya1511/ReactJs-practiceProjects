import React from "react"
import { useGlobalContext } from "../context"

export default function SearchForm(){
    const { setsearchTerm}=useGlobalContext();
    const searchValue = React.useRef('');
    React.useEffect(()=>{
        searchValue.current.focus()
    }
    ,[])
   function handleSubmit(e){
       e.preventDefault()
   }
   function searchCocktail(){
       setsearchTerm(searchValue.current.value)
   }
    return (
        <section className="section-search">
            <form  className="section-form" onSubmit={handleSubmit}>
                <div className="form-control">
             <label htmlFor="name">Search Your Favourite Cocktail</label>
                <input 
                 type="text"
                 id="name"
                 name="name"
                 ref={searchValue}
                 onChange={searchCocktail}
                />
                </div>
            </form>
        </section>
    )
}