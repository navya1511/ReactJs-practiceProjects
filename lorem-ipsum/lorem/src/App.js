import React from "react";
import data from './data'


function App() {
  const [count,setCount]=React.useState(0);
  const [text,setText]=React.useState([]);

  function handleSubmit(e){
      e.preventDefault();
      let amount=parseInt(count);
      if(count<=0){
        amount=1;
      }
      if(count>8){
        amount=8;
      }
      setText(data.slice(0,amount))
  }
   
  return (
     <section className="section">
       <h2>Tired of Boring lorem ipsum?</h2>
       
         <form className="form" onClick={handleSubmit}>
           <label htmlFor="amount">Paragraphs:</label>
           <input
            type="number"
            id="amount"
            name="amount"
            value={count}
            onChange={(e)=> setCount(e.target.value)}

           />
           <button className="btn" >Generate</button>
         </form>
         <article className="text">
           {text.map((item,index)=>{
             return <p key={index}>{item}</p>
           })}
         </article>
     </section>
  );
}

export default App;
