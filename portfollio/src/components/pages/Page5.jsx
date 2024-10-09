import React from 'react'
import "./Page5.css"
import "../utility/utility.css"
import ProjectCard from '../cards/ProjectCard.jsx';

import {project} from '../../data';

export default function Page5() {
    return (
        <>
            <div className="page5">
                <div className="pg-heading pg5-heading" data-aos="fade-right">
                    Projects
                </div>
                <div className="project-container">
                    {project.map((item) => {
                        return (
                            <ProjectCard project={item}></ProjectCard>
                        )
                    }
                    )}
                </div> 
            </div>
        </>
    )
}
