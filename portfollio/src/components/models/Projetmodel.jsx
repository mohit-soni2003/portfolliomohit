import { React, useState } from 'react'
import "./Projetmodel.css"
export default function Projetmodel({ setshowmodal }) {
  return (
    <>
      <div className="modal-wrapper" onClick={()=>setshowmodal(false)}></div>

        <div className="project-model">
          Hi this is models
        dsds
          <button onClick={() => setshowmodal(false)}>close</button>
        </div>
    </>
  )
}
