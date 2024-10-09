import React from 'react'

import Card1 from '../cards/card1.jsx'
import Card2 from '../cards/Card2.jsx'

import "./Page3.css"
import "../utility/utility.css"
import "../utility/syle.css"
import "./Page3.css"

import { skill,edu_qualification} from '../../data'
export default function Page3() {
    return (
        <>
            <div className="page3">
                {/* ---------------Skill and education heading-------- */}
                <div className="pg-heading pg3-heading" data-aos="fade-right" >
                    Skills
                </div>
                <div className="skill-edu-heading heading2" data-aos="fade-up" >
                    Skills and Education
                </div>
                <div className="skill-edu-desc heading2-desc" data-aos="fade-up">
                    As a computer engineering student, I explore emerging technologies, gaining expertise through projects and coding to build impactful solutions.
                </div>

                {/* -----------flex box of skill and education--------------     */}

                <div className="skill-edu-container">
                    <div className="edu-container" data-aos="fade-right">
                        {edu_qualification.map((item)=>( 
                            <div className="edu-card1"><Card1 qualification={item}></Card1></div>
                        ))}
                    </div>
                    <div className="skillcontainer" data-aos="fade-left">
                        {skill.map((item) => (
                            <div className="skill-card2"><Card2 skill={item}></Card2></div>
                        ))}
                    </div>
                </div>


            </div>
        </>
    )
}
