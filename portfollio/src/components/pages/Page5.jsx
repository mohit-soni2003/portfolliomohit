import React from 'react'
import "./Page5.css"
import "../utility/utility.css"
import ProjectCard from '../cards/ProjectCard';


export default function Page5() {
    return (
        <>
            <div className="page5">
                <div className="pg-heading">
                    Projects
                </div>
                <div className="project-container">
                  <ProjectCard></ProjectCard>  
                  <ProjectCard></ProjectCard>  
                  <ProjectCard></ProjectCard>  
                  <ProjectCard></ProjectCard>  
                  <ProjectCard></ProjectCard>  
                  <ProjectCard></ProjectCard>  
                </div>
            </div>
        </> 
    )
}
