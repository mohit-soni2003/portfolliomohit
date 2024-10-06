import React from 'react'
import "./Navpan.css"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import { personal_detail } from '../../data';

export default function Navpan() {
  return (
    <>
      <div className="nav-container">

        <div className="navbar">
          <div className="nav-left">
            {personal_detail.name}
          </div>
          <div className="nav-center">
            <div className="nav-link"><Link to="/">Home</Link></div>
            <div className="nav-link"><Link>About</Link></div>
            <div className="nav-link"><Link>Skills</Link></div>
            <div className="nav-link"><Link>Competitions</Link></div>
            <div className="nav-link"><Link>Achievements</Link></div>
            <div className="nav-link"><Link>Projects</Link></div>
          </div>
          <div className="nav-right">
            <Button variant='warning'>Contact Me</Button>
          </div>
        </div>
      </div>
    </>

  )
}
