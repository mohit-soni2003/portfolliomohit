import { React, useState, useEffect } from 'react'
import "./Page1.css"
import "../utility/utility.css"
import "../utility/syle.css"

// icons----- 
import { FaGlobe } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

import { Link } from "react-router-dom"
import { social_links } from '../../data';
import { personal_detail } from '../../data';





export default function Page1() {
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
            <div className="page-1">
                <div className="social-media" data-aos="fade-right">
                    <div><Link to="/"><FaGlobe /></Link></div>
                    <div><Link to={social_links.instagram} target='new'><FaSquareInstagram /></Link></div>
                    <div><Link to={social_links.linkedin} target='new'><FaLinkedin /></Link></div>
                    <div><Link to={social_links.youtube} target='new'><FaYoutube /></Link></div>
                    <div><Link to={social_links.github} target='new'><FaGithub /></Link></div>
                    <div><Link to={social_links.leetcode} target='new'><SiLeetcode /></Link></div>
                    <div><Link to={social_links.gfg} target='new'><SiGeeksforgeeks /></Link></div>
                </div>
                <div className="profile">
                    <div className="profile-heading" data-aos="fade-right">
                        This is {personalDetail.name}
                    </div>
                    <div className="profile-tech" data-aos="fade-left">
                        {personalDetail.desc1}
                    </div>
                    <div className="profile-desc" data-aos="fade-left">
                        {personalDetail.desc2}
                    </div>
                    <div className="cnt-me-btn" data-aos="fade-up">
                        Contact Me &nbsp;
                        <FaRegArrowAltCircleRight />
                    </div>
                </div>
                <div className="profile-photo" data-aos="fade-up">
                    <img src={personalDetail.photo1} alt="" />
                </div>
            </div>
        </>
    )
}
