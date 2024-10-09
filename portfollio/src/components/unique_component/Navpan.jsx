import React from 'react'
import "./Navpan.css"
import Button from 'react-bootstrap/Button';
import { HashLink as Link } from 'react-router-hash-link';

import { VscThreeBars } from "react-icons/vsc";


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
              <div className="nav-link"><Link to="#about">About</Link></div>
              <div className="nav-link"><Link to="#skill">Skills</Link></div>
              <div className="nav-link"><Link to="#competition">Competitions</Link></div>
              <div className="nav-link"><Link to="#achievement">Achievements</Link></div>
              <div className="nav-link"><Link to="#contact">Projects</Link></div>
            </div>
            <div className="nav-right">
              <Link to="#contact">
              <Button variant='warning'>Contact Me</Button>
              </Link>
            </div>
            <div className="nav-right2"><VscThreeBars size={35} />
            </div>
          </div>
        </div>
    </>

  )
}
