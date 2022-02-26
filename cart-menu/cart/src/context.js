import React  from "react"
import reducer from "./reducer";
import cartItems from './data'

const url = "https://course-api.com/react-useReducer-cart-project"

const AppContext=React.createContext()


const initialState = {
  loading: false,
  Cart: cartItems,
  total: 0,
  amount: 0,
}
const AppProvider=({children})=>{
    //const [Cart , setCart]=React.useState(cartItems)
     const [state, dispatch] = React.useReducer(reducer , initialState)

    const clearCart =()=>{
        dispatch({type:'clear_cart'})
    }

    const remove=(id)=>{
      dispatch({type:'remove', payload: id})
    }
     const increase=(id)=>{
        dispatch({type:'increase', payload: id})
    }
    const decrease=(id)=>{
        dispatch({type:'decrease',payload: id})
    }
    const fetchData = async () => {
        dispatch({type: 'loading'})
        
        const response = await fetch(url)
        const cart = await response.json()
        dispatch({type:'display_items', payload: cart})
    }

    const toggleAmount=(id , type)=>{
        dispatch({type:'toggle_amount',payload:{id,type}})
    }
    React.useEffect(()=>{
        fetchData()
    },[])

    React.useEffect(()=>{
        dispatch({type:'Get_totals'})
    
    },[state.Cart])

    return (
    <AppContext.Provider 
    value= {{
     ...state,
     remove,
     clearCart,
      increase,
      decrease,
    toggleAmount,
     

    }}>
        {children}
    </AppContext.Provider>
    )

}
 export const useGlobalContext = () =>{
    return React.useContext(AppContext)
}

export { AppProvider , AppContext}
