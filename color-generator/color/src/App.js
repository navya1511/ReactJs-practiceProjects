import React  from "react";
import SingleColor from "./SingleColor";
import Values from 'values.js'

function App() {
  const [color , setColor]=React.useState('')
  const [error , setError]=React.useState(false)
  const [list , setList]=React.useState(new Values('#f15025').all(10))

  function handleSubmit(e){
    e.preventDefault();
    try {
      const Colors=new Values(color).all(10);
      setList(Colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
    
  }
  return (
    <>
    <section className="container">
      <h3>Color generator</h3>
      <form onSubmit={handleSubmit}>
        <input 
         type="text"
         value={color}
         onChange={(e)=>setColor(e.target.value)}
         placeholder="#f15025"
         className={`${error ? 'error' : null}`}
        
        />
        <button className="btn" type="submit" >Submit</button>
      </form>

      </section>
      <section className="colors">
        {list.map((color,index)=>{
          return <SingleColor 
          key={index}
          {...color}
          index={index}
          hexColor={color.hex}
          />
        })}
      </section>
      </>
  );
}

export default App;
