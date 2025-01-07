import React from 'react'
import "./ProjectCard.css"
import { FaAnglesDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
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
                    <Link to="/maintain">
                        View More &nbsp; <FaAnglesDown />
                    </Link>

                </div>
            </div>
        </>
    )
}
