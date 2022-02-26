import React from "react"
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'


function App() {
  const [loading , setLoading]=React.useState(true)
  const [jobs , setJobs]=React.useState([])
  const [value , setValue]=React.useState(0)


  const fetchJobs=async ()=>{
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false)
  }

  React.useEffect(() =>{
    fetchJobs();
  } ,[])


  if (loading){
    return(
      <section className="section--loading">
        <h2>loading...
        </h2>
      </section>
    )
  }

  const {company , dates , duties , title} = jobs[value];
  return (
    <section>
      <div className="title">
        <h2>Experience</h2>
        </div>
      <div className="jobs--center">
      <div className="buttons">
        {
          jobs.map((item,index)=>{
            return (
              <button 
              key={item.id}
              onClick={()=>setValue(index)}
              className={`job-btn ${index===value && "active-btn"} `}
              
              >{item.company}</button>
            )
          })
        }
      </div>
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="dates">{dates}</p>
        {duties.map((duty,index)=>{
          return (
            <div key={index} className="job-role">
              <FaAngleDoubleRight className="job-icon"/>
              <p>{duty}</p>
            </div>
          )
        })}

      </article>

    </div>
    <button type="button" className="btn">
      More info
    </button>
    </section>
  );
}

export default App;
