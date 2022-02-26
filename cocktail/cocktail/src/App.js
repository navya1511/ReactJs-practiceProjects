import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
       <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/cocktail/:id' element={<SingleCocktail />}></Route>
        <Route path='*' element={<Error />}></Route>
        </Routes>
    </Router>
      
  );
}

export default App;
