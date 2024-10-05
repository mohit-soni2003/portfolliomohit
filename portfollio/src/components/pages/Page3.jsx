import React from 'react'

import Card1 from '../cards/card1'
import Card2 from '../cards/Card2'

import "./Page3.css"
import "../utility/utility.css"
import "../utility/syle.css"
import "./Page3.css"

export default function Page3() {
    return (
        <>
            <div className="page3">
                {/* ---------------Skill and education heading-------- */}
                <div className="pg-heading pg3-heading">
                    Skills
                </div>
                <div className="skill-edu-heading heading2">
                    Skills and Education
                </div>
                <div className="skill-edu-desc heading2-desc">
                As a computer engineering student, I explore emerging technologies, gaining expertise through projects and coding to build impactful solutions.
                </div>

                {/* -----------flex box of skill and education--------------     */}

                <div className="skill-edu-container">
                    <div className="edu-container">
                        <div className="edu-card1"><Card1></Card1></div>
                        <div className="edu-card1"><Card1></Card1></div>
                        <div className="edu-card1"><Card1></Card1></div>
                    </div>
                    <div className="skillcontainer">
                        <div className="skill-card2"><Card2></Card2></div>
                        <div className="skill-card2"><Card2></Card2></div>
                        <div className="skill-card2"><Card2></Card2></div>
                        <div className="skill-card2"><Card2></Card2></div>
                        <div className="skill-card2"><Card2></Card2></div>
                        <div className="skill-card2"><Card2></Card2></div>
                        <div className="skill-card2"><Card2></Card2></div>
                        <div className="skill-card2"><Card2></Card2></div>
                    </div>
                </div>


            </div>
        </>
    )
}
