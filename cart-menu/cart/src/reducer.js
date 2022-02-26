const reducer=(state, action)=>{
  
  if(action.type === 'clear_cart'){
    
          return {...state , Cart:[]}
  }

  if(action.type === 'remove'){
          return {
              ...state,
              Cart: state.Cart.filter((cartitem)=>cartitem.id!==action.payload)
          } 
        }

        if(action.type === 'increase'){
          let tempCart = state.Cart.map((cartitem)=>{
              if(cartitem.id===action.payload){
                  return {...cartitem, amount:cartitem.amount+1}
              }
              return cartitem;

          })
          return {...state,Cart:tempCart}
        }
        if(action.type === 'decrease'){
            let tempCart = state.Cart.map((cartitem)=>{
                if(cartitem.id === action.payload){
                    return {...cartitem , amount:cartitem.amount-1}
                }
                return cartitem;

            })
            .filter((cartitem)=> cartitem.amount!==0)
            return {...state, Cart:tempCart}
        }
        if(action.type === 'loading'){
            return {...state, loading:true}
        }
        if(action.type === 'display_items'){
            return {...state, Cart:action.payload , loading:false}
        }
        if(action.type ==='toggle_amount'){
            let tempCart = state.Cart.map((cartitem)=>{
                if(cartitem.id===action.payload.id){
                    if(action.payload.type==='inc'){
                        return {...cartitem,amount:cartitem.amount+1}
                    }
                    if(action.payload.type==='dec'){
                        return {...cartitem, amount:cartitem.amount-1}
                    }
                }
                return cartitem
            })
            .filter((cartitem)=>cartitem.amount!==0)
            return {...state , Cart:tempCart}
        }
        if(action.type === "Get_totals"){
            let {total , amount}=state.Cart.reduce((cartTotal,cartitem) => {
                const {price, amount}=cartitem;
                const itemTotal = price * amount;

                cartTotal.total += itemTotal
                cartTotal.amount += amount
                return cartTotal
            }, {
                total:0,
                amount:0
            }
            )
            total = parseFloat(total.toFixed(2))
            return {...state, total, amount}
        }

      return state

}
export default reducer;