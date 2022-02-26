import React from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [loading , setLoading]=React.useState(false);
    const [searchTerm , setsearchTerm]=React.useState('a')
    const [cocktails , setCocktails]=React.useState([])
    const fetchDrink= async ()=>{
        setLoading(false);
        try {
            const response = await fetch(`${url}${searchTerm}`);
        const data = await response.json();
        const {drinks}= data;
        if(drinks){
        const newDrinks=drinks.map((item)=>{
        const {idDrink , 
            strAlcoholic,
            strDrink,
            strDrinkThumb,
            strGlass,
        }=item
        return {
            id:idDrink,
            image:strDrinkThumb,
            name:strDrink,
            info:strAlcoholic,
            glass:strGlass
            
        
        }
        })
        setCocktails(newDrinks)
        }
        else{
            setCocktails([])
        }
        setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    React.useEffect(()=>{
        fetchDrink()
    },[searchTerm])
  return (
      <AppContext.Provider 
      value=
      {{
          loading,
          searchTerm,
          cocktails,
          setsearchTerm
      }}
      >
          {children}
    </AppContext.Provider>
  )
}
 export const useGlobalContext=()=>{
    return React.useContext(AppContext)
}
export { AppProvider , AppContext}