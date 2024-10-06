import React from 'react'
import "./ProjectCard.css"
import { FaAnglesDown } from "react-icons/fa6";

 
export default function ProjectCard() {
    return (
        <>
            <div className="project-card">
                <div className="project-image">
                    <img src="https://clinic-hub-git-main-mohit-sonis-projects-6fb4d728.vercel.app/assets/logo-D38eqGl7.png" alt="" />
                </div>
                <div className="project-name">
                    ClinicHub
                </div>
                <div className="project-desc">
                    ClinicHub is a Website that automate the clinic management in Small towns and impoves the Healthcare Services accessiblity.
                </div>
                <div className="view-more">
                    View More &nbsp; <FaAnglesDown />

                </div>
            </div>
        </>
    )
}
