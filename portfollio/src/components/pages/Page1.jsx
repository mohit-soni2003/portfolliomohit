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

import {Link} from "react-router-dom"  
import { social_links } from '../../data';
import { personal_detail } from '../../data';

export default function Page1() {
    return ( 
        <>
            <div className="page-1">
                <div className="social-media" data-aos="fade-right">
                    <div><Link to="/"><FaGlobe/></Link></div>
                    <div><Link to={social_links.instagram} target='new'><FaSquareInstagram /></Link></div>
                    <div><Link to={social_links.linkedin} target='new'><FaLinkedin /></Link></div>
                    <div><Link to={social_links.youtube} target='new'><FaYoutube /></Link></div>
                    <div><Link to={social_links.github} target='new'><FaGithub /></Link></div>
                    <div><Link to={social_links.leetcode} target='new'><SiLeetcode /></Link></div>
                    <div><Link to={social_links.gfg} target='new'><SiGeeksforgeeks /></Link></div>
                </div>
                <div className="profile">
                    <div className="profile-heading" data-aos="fade-right">
                        This is {personal_detail.name}
                    </div>
                    <div className="profile-tech" data-aos="fade-left">
                        Data Structure and Algorithms || Java  || Database Management System(DBMA)|| SQL || Operating System || OOPS ||MongoDb|| Node || Express || React || React-Native|| MERN Stack Developer
                    </div>
                    <div className="profile-desc" data-aos="fade-left">
                        A proficient MERN Stack Developer with expertise in Data Structures & Algorithms, Java, OOPS , DBMS, SQL, and Operating Systems. Adept in full-stack development using MongoDB, Express, React, and Node, along with React Native for mobile app solutions, ensuring scalable and efficient software development.
                    </div>
                    <div className="cnt-me-btn" data-aos="fade-up">
                        Contact Me &nbsp;
                        <FaRegArrowAltCircleRight />
                    </div>
                </div>
                <div className="profile-photo" data-aos="fade-up">
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQH6WKwUeusC4Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709314132180?e=1733356800&v=beta&t=YgAfVZw3eQ_UBU5iBQfMTyvn5kIUdm8LYo5gic2_sCQ" alt="" />
                </div>
            </div>
        </>
    )
}
