import React from 'react'
import "./card1.css"
import "../utility/syle.css"

export default function card1({qualification}) {
  return (
    <>
    <div className="card1">
        <div className="card-l1">{qualification.year}</div>
        <div className="card-l2">{qualification.qualification_name} - <span>{qualification.institute_name}</span> <span style={{color:"rgba(255,0,0,0.6)" , } }>{qualification.score}</span></div>
    </div>
    </>
  )
}
