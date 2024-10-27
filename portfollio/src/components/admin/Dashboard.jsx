import React from 'react'
import Card4 from '../cards/Card4';
import "./Dashboard.css"
import Button from 'react-bootstrap/Button';

import DashboardSidebar from './DashboardSidebar'

export default function Dashboard() {
  return (
    <div className="admin-dashboard">
      <div className="dasboard-left"><DashboardSidebar></DashboardSidebar></div>
      <div className="dasboard-right">
        <div className="das-right-top">
          <div>Projects</div>
          <Button variant="light">Add New Projects</Button>
        </div>
        
      </div>
    </div>
  )
}
