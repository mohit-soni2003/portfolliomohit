import React from 'react'
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


export default function Page1() {
    return (
        <>
            <div className="page-1">
                <div className="social-media">
                    <div><FaGlobe></FaGlobe></div>
                    <div><FaSquareInstagram /></div>
                    <div><FaLinkedin /></div>
                    <div><FaYoutube /></div>
                    <div><FaGithub /></div>
                    <div><SiLeetcode /></div>
                    <div><SiGeeksforgeeks /></div>
                </div>
                <div className="profile">
                    <div className="profile-heading">
                        This is Mohit Soni
                    </div>
                    <div className="profile-tech">
                        Data Structure and Algorithms || Java  || Database Management System(DBMA)|| SQL || Operating System || OOPS ||MongoDb|| Node || Express || React || React-Native|| MERN Stack Developer
                    </div>
                    <div className="profile-desc">
                        A proficient MERN Stack Developer with expertise in Data Structures & Algorithms, Java, OOPS , DBMS, SQL, and Operating Systems. Adept in full-stack development using MongoDB, Express, React, and Node, along with React Native for mobile app solutions, ensuring scalable and efficient software development.
                    </div>
                    <div className="cnt-me-btn">
                        Contact Me &nbsp;
                        <FaRegArrowAltCircleRight />
                    </div>
                </div>
                <div className="profile-photo">
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQH6WKwUeusC4Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709314132180?e=1733356800&v=beta&t=YgAfVZw3eQ_UBU5iBQfMTyvn5kIUdm8LYo5gic2_sCQ" alt="" />
                </div>
            </div>
        </>
    )
}
