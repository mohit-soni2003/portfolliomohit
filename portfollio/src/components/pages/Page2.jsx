import { React, useState, useEffect } from 'react'
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

     const [personalDetail, setPersonalDetail] = useState(null);  // To store fetched data
        const [loading, setLoading] = useState(true);                // To manage loading state
        const [error, setError] = useState(null);                    // To manage error state
    
        useEffect(() => {
            // Fetch the personal details when the component mounts
            const fetchPersonalDetails = async () => {
                try {
                    // const response = await fetch('http://localhost:8000/getpersonaldetail');
                    const response = await fetch('https://portfollioserver-one.vercel.app/getpersonaldetail');
                    if (!response.ok) {
                        throw new Error('Failed to fetch personal details');
                    }
                    const data = await response.json();
                    setPersonalDetail(data.personalDetail);  // Set the fetched data to state
                    setLoading(false);                       // Update loading state
                } catch (err) {
                    setError(err.message);  // Set error message in case of failure
                    setLoading(false);       // Update loading state even on error
                }
            };
    
            fetchPersonalDetails();  // Call the function to fetch data
        }, []);  // Empty dependency array to ensure it runs only once when the component mounts
    
        if (loading) {
            return (
                <div>Loading...</div>  // Show loading message while data is being fetched
            )
        }
    
        if (error) {
            return (
                <div>Error: {error}</div>  // Show error message if something goes wrong
            )
        }
    
    return (
        <>
            <div className="page-2" id='about'>

                <div className="pg-2-heading pg-heading"  data-aos="fade-right">
                    About Me
                </div>

                <div className="abt-me-container">
                    <div className="abt-me-photo"   data-aos="fade-right" >
                        <img src={personalDetail.photo2} alt="" />
                    </div>
                    <div className="abt-me-desc" data-aos="fade-up">
                        <h1>I'm {personalDetail.name}</h1>
                        <div className="abt-me-caption">
                        {personalDetail.desc3}
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

                        <div className="down-cv-btn">
                        <a 
                                href="/cv.pdf" 
                                download="My_CV.pdf" 
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                Download CV &nbsp;<FaFileDownload size={21} />
                            </a>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
 