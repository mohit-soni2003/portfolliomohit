import React from 'react'
import "./ProjectCard.css"
import { FaAnglesDown } from "react-icons/fa6";

 
export default function ProjectCard({project}) {
    return (
        <>
            <div className="project-card" data-aos="flip-left" >
                <div className="project-image">
                    <img src={project.image} alt="" />
                </div>
                <div className="project-name">
                    {project.name}
                </div>
                <div className="project-desc">
                    {project.description}
                </div>
                <div className="view-more">
                    View More &nbsp; <FaAnglesDown />

                </div>
            </div>
        </>
    )
}
