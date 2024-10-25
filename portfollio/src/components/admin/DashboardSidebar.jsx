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
            <div className="sidebar-links"><Link to="">Home</Link></div>
            <div className="sidebar-links"><Link to="">Profile</Link></div>
            <div className="sidebar-links"><Link to="">Projects</Link></div>
            <div className="sidebar-links"><Link to="">Achievements</Link></div>
            <div className="sidebar-links"><Link to="">Skills</Link></div>
            <div className="sidebar-links"><Link to="">Education </Link></div>
            <div className="sidebar-links"><Link to="">Contacts Request </Link></div>
            <div className="sidebar-links"><Link to="">Analytics</Link></div>
            <div className="sidebar-links"><Link to="">Admin Users</Link></div>
        </div>
    </div>
  )
}
