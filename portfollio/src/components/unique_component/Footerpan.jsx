import React from 'react'
import "./Footerpan.css"
import { Link } from "react-router-dom";

// data import--------
import { social_links } from '../../data';


// import icons--------

import { FaGlobe } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";


export default function Footerpan() {
  return (
    <>
    <div className="big-footer">
    <div className="footer">
        <div className="footer-left">
        <div className="footer-left-l1">Mohit Soni</div>
        <div className="footer-left-l2">Webdeveloper || Freelancer</div>
        </div>
        <div className="footer-mid">
        <div className="footer-mid-l1">About Me</div>
        <div className="footer-mid-l2">
            <div><Link>Skills</Link></div>
            <div><Link>Achievement</Link></div>
            <div><Link>Project</Link></div>
            <div><Link>Contact Me</Link></div>
        </div>
        </div>
        <div className="footer-right">
            <div className="footer-right-l1">
                 Follow
            </div>
            <div className="footer-right-l2"> 
                <div><Link to={social_links.youtube} target='new'><FaYoutube size={30}/></Link></div>
                <div><Link to={social_links.instagram} target='new'><FaSquareInstagram size={30}/></Link></div>
                <div><Link to={social_links.linkedin} target='new'><FaLinkedin size={30}/></Link></div>
                <div><Link to={social_links.website} target='new'><FaGlobe size={30}/></Link></div>
            </div>
            <div className="footer-right-l3">
                Tech Platform
            </div>
            <div className="footer-right-l4">
                <div><Link to={social_links.gfg} target='new'><SiGeeksforgeeks size={30}/></Link></div>
                <div><Link to={social_links.leetcode} target='new'><SiLeetcode size={30}/></Link></div>
                <div><Link to={social_links.github} target='new'><FaGithub size={30}/></Link></div>
                <div><Link to={social_links.codeforces} target='new'><SiCodeforces size={30}/></Link></div>      
            </div>

        </div>
    </div>
        <div className="copyright">@ 2024 by Mohit Soni. All rights reserved</div>
    </div>
    </>

  )
}
