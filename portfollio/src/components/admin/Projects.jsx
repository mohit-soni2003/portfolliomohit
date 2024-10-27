import React from 'react'
import Card4 from '../cards/Card4';
import Button from 'react-bootstrap/Button';
import "./Projects.css"
import DashboardSidebar from './DashboardSidebar'


export default function Projects() {
  return (
<div className="admin-dashboard">
        <div className="dasboard-left"><DashboardSidebar></DashboardSidebar></div>
        <div className="dasboard-right">
        <div className="das-right-top">
          <div>Projects</div>
          <Button variant="light">Add New Projects</Button>
        </div>
        <div className="admin-project-container">
          <div className="admin-project-card"><Card4></Card4></div>
          <div className="admin-project-card"><Card4></Card4></div>
          <div className="admin-project-card"><Card4></Card4></div>
          <div className="admin-project-card"><Card4></Card4></div>
          <div className="admin-project-card"><Card4></Card4></div>
          <div className="admin-project-card"><Card4></Card4></div>
          <div className="admin-project-card"><Card4></Card4></div>
          <div className="admin-project-card"><Card4></Card4></div>
        </div>
      </div>
    </div>  )
}
