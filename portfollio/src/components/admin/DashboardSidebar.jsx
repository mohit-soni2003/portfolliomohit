import React from 'react'
import "./DashboardSidebar.css"
import {Link} from "react-router-dom"
import image from "/images/formal.jpg"


export default function DashboardSidebar() {
  return (
    <div className="dasboard-sidebar">
        <div className="sidebar-profile">
            <div className="sidebar-profile-image">
                <img src={image} alt="" />
            </div>
            <div className="sidebar-profile-name">
                Mohit Soni
            </div>
        </div>
        <div className="sidebar-links-container">
            <div className="sidebar-links"><Link to="/dashboard">Home</Link></div>
            <div className="sidebar-links"><Link to="/profile">Profile</Link></div>
            <div className="sidebar-links"><Link to="/projects">Projects</Link></div>
            <div className="sidebar-links"><Link to="/achievement">Achievements</Link></div>
            <div className="sidebar-links"><Link to="/skill">Skills</Link></div>
            <div className="sidebar-links"><Link to="/education">Education </Link></div>
            <div className="sidebar-links"><Link to="/contactreq">Contacts Request </Link></div>
            <div className="sidebar-links"><Link to="/analytics">Analytics</Link></div>
            <div className="sidebar-links"><Link to="/adduser">Admin Users</Link></div>
        </div>
    </div>
  )
}
