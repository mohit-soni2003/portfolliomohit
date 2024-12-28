import { React, useState, useEffect } from 'react'

import Card1 from '../cards/card1.jsx'
import Card2 from '../cards/Card2.jsx'

import "./Page3.css"
import "../utility/utility.css"
import "../utility/syle.css"
import "./Page3.css"

import { skill,edu_qualification} from '../../data'
export default function Page3() {
    const [skills, setSkills] = useState([]); // State to store skills
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        // Fetch skills from API
        fetch('http://localhost:8000/getskills')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch skills');
                }
                return response.json();
            })
            .then((data) => {
                setSkills(data.skills); // Update skills state with fetched data
                setLoading(false); // Set loading to false
            })
            .catch((err) => {
                console.error(err);
                setError(err.message); // Set error message
                setLoading(false); // Set loading to false
            });
    }, []);

    return (
        <>
            <div className="page3" id='skill'>
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
                        {/* Show loading, error, or skills */}
                        {loading ? (
                            <div>Loading skills...</div>
                        ) : error ? (
                            <div>Error: {error}</div>
                        ) : (
                            skills.map((item) => (
                                <div className="skill-card2" >
                                    <Card2 skill={item} />
                                </div>
                            ))
                        )}
                    </div>
                </div>


            </div>
        </>
    )
}
