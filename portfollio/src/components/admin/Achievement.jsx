import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import Card4 from '../cards/Card4';
import Button from 'react-bootstrap/Button';
import "./Projects.css"

export default function Achievement() {
  return (
<div className="admin-dashboard">
        <div className="dasboard-left"><DashboardSidebar></DashboardSidebar></div>
        <div className="dasboard-right">
        <div className="das-right-top">
          <div>Achievement</div>
          <Button variant="light">Add New Achievement</Button>
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
      </div>    </div>  )
}
