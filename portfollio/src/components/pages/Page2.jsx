import React from 'react'
import "./Page2.css"
import "../utility/utility.css"
import "../utility/syle.css"


import { FaFileDownload } from "react-icons/fa";

import { personal_detail } from '../../data';


import sih2024 from "/images/sih2024.jpg"
import hackindore from "/images/hackindore.jpg"
import formal from "/images/formal.jpg"
import hackindoregrp from "/images/hackindoregrp.jpg"

export default function Page2() {
    return (
        <>
            <div className="page-2" id='about'>

                <div className="pg-2-heading pg-heading"  data-aos="fade-right">
                    About Me
                </div>

                <div className="abt-me-container">
                    <div className="abt-me-photo"   data-aos="fade-right" >
                        <img src={hackindoregrp} alt="" />
                    </div>
                    <div className="abt-me-desc" data-aos="fade-up">
                        <h1>I'm {personal_detail.name}</h1>
                        <div className="abt-me-caption">
                            As a 3rd-year engineering student at IET DAVV, I’m passionate about leveraging technologies like Data Structures & Algorithms, Java, DBMS, SQL, and the MERN stack to develop working prototypes. I had participated in tech competitions, hackathons, and workshops, focusing on web and mobile app development, and programming solutions.
                        </div>
                        {/* ---------Feture------ */}
                        <div className="pg-2-feature-cont">
                            {/* feature-1----- */}
                            <div className="pg2-fea">
                            <div style={{fontSize:"1.6rem" , fontWeight:"500"}}>2+</div>
                            <div style={{fontSize:"1.1rem" , fontWeight:"500" , color:"rgba(0,0,0,0.4)"}}>Years of Experience</div>
                            </div>
                            {/* feature-2----- */}
                            <div className="pg2-fea">
                            <div style={{fontSize:"1.6rem" , fontWeight:"500"}}>300+</div>
                            <div style={{fontSize:"1.1rem" , fontWeight:"500" , color:"rgba(0,0,0,0.4)"}}>DSA Problems Solved</div>
                            
                            </div>
                            {/* feature-3----- */}
                            <div className="pg2-fea">
                            <div style={{fontSize:"1.6rem" , fontWeight:"500"}}>40+</div>
                            <div style={{fontSize:"1.1rem" , fontWeight:"500" , color:"rgba(0,0,0,0.4)"}}>Apeared in Coding Contests</div>
                            </div>
                        </div>

                        <div className="down-cv-btn">Download CV &nbsp;<FaFileDownload size={21} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
 