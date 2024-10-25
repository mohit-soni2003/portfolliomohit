import React from 'react'
import "./Dashboard.css"
import DashboardSidebar from './DashboardSidebar'

export default function Dashboard() {
  return (
    <div className="admin-dashboard">
        <div className="dasboard-left"><DashboardSidebar></DashboardSidebar></div>
        <div className="dasboard-right"></div>
    </div>
  )
}
