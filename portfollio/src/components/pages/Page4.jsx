import React from 'react'
import "./Page4.css"
import "../utility/utility.css"
import Card3 from "../cards/Card3.jsx"

export default function Page4() {
  return (
    <>
    <div className="page4">
        <div className="heading2">
            Competitions and Hackhthons
        </div>
        <div className="heading2-desc">
        I have been participated and competete in many <span style={{color:"var(--second-color)"}}> Competitions, Hackathons, Online Platforms</span>
        </div>

        <div className="pg4-card-container">
            <div className="pg4-card"><Card3></Card3></div>
            <div className="pg4-card"><Card3></Card3></div>
            <div className="pg4-card"><Card3></Card3></div>
        </div>
    </div>
    </>

  )
}
