import React from 'react'
import "./ProjectCard.css"

// CSS of achievent and project card are same 
import { FaAnglesDown } from "react-icons/fa6";


export default function AchievementCard() {
    return (
        <div className="project-card achievement-card">
            <div className="project-image">
                <img src="https://clinic-hub-git-main-mohit-sonis-projects-6fb4d728.vercel.app/assets/logo-D38eqGl7.png" alt="" />
            </div>
            <div className="achievement-name">
                ClinicHub
            </div>
            <div className="view-more">
                View More &nbsp; <FaAnglesDown />

            </div>
        </div>
    )
}
