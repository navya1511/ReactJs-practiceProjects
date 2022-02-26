import React from "react";
import Loading from "../components/Loading";
import { useParams , Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export default function SingleCocktail() {
    const { id } = useParams()
    const [loading,setLoading]=React.useState(false)
    const [cocktail,setCocktail]=React.useState(null)
    console.log(id)

    React.useEffect(()=>{
     setLoading(true);
     async function getCockTail(){
     
     try {
        const response= await fetch(`${url}${id}`)
        //console.log(response)
        const data = await response.json()
        console.log(data)
        if(data.drinks){
         const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
         }=data.drinks[0];
         const ingredients= [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
        ]
        const newCocktail= {
            name,
            image,
            info,
            category,
            instructions,
            ingredients,
            glass
        }
        setCocktail(newCocktail)
        }
        else{
            setCocktail(null)
        }
     } catch (error) {
         console.error()
     }
     setLoading(false)
    }
    getCockTail()
    },[id])

    if(loading){
        return (
            <Loading />
        )
    }

if(!cocktail){
        return <h2 className="section-title">No cocktail to display</h2>
    }
else{
        const {
            name,
            image,
            info,
            category,
            instructions,
            ingredients,
            glass

    }=cocktail

    return(
     <section className="section cocktail-section">
         <Link to='/' className="btn btn-primary">Back home</Link>
         <h2 className="section-title">{name}</h2>
         <div className="drink">
            <img src={image} alt={name}  />
            <div className="drink-info">
                <p>
                    <span className="drink-data">name:</span> {name}
                </p>
                <p>
                    <span className="drink-data">category:</span> {category}
                </p>
                <p>
                    <span className="drink-data">info:</span> {info}
                </p>
                <p>
                    <span className="drink-data">glass:</span> {glass}
                </p>
                <p>
                    <span className="drink-data">instructions:</span> {instructions}
                </p>
                <p>
                    <span className="drink-data">ingredients:</span> 
                    {ingredients.map((index, inst)=> {
                        return inst ? <span key={index}>{inst}</span> : null
                    })}
                </p>
            </div>

            
         </div>

     </section>
    
    
    
  )
}
}


