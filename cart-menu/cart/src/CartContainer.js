import React from "react"
import CartItem from "./CartItem"
import { useGlobalContext } from "./context"

export default function CartContainer(){
   const { Cart , total , clearCart }= useGlobalContext();
   if(Cart.length === 0){
       return (
           <section className="cart">
               <header>
                   <h4>Your Bag</h4>
                   <h4 className="empty-cart">is currently happy</h4>
               </header>
           </section>
       )
   }
   return (
       <section className="cart">
           <header>
               <h2>Your bag</h2>
           </header>
           <div>
               {Cart.map((items)=>{
                   return <CartItem key={items.id} {...items}/>
               })}
           </div>
           <footer>
           <hr />
           <div className="cart-total">
               <h4>
                   total <span>$ {total}</span>
               </h4>
           </div>
           <button className="btn clear-btn" onClick={clearCart}>Clear cart</button>
           </footer>
       </section>
   )
}