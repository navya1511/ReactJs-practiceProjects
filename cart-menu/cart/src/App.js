import React from "react"
import NavBar from "./NavBar";
import { useGlobalContext } from "./context"
import CartContainer from "./CartContainer";

function App() {
  const { loading }=useGlobalContext();
  if(loading){
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  )
}

export default App;
