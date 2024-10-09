import React from 'react'
import "./ProjectCard.css"

// CSS of achievent and project card are same 
import { FaAnglesDown } from "react-icons/fa6";


export default function AchievementCard({achievement}) {
    return (
        <div className=" achievement-card" data-aos="flip-left">
            <div className="achievement-image">
                <img src={achievement.image} alt="" />
            </div>
            <div className="achievement-name">
                {achievement.name}
            </div>
            <div className="view-more">
                View More &nbsp; <FaAnglesDown />

            </div>
        </div>
    )
}
