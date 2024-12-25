import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import "./ContactsReq.css"
import Card5 from '../cards/Card5'
export default function ContactsReq() {
  return (
<div className="admin-dashboard">
        <div className="dasboard-left"><DashboardSidebar></DashboardSidebar></div>
        <div className="dasboard-right">
        <div className="admin-contact-heading">Contact Request</div>
        <div className="contact-card-container">
          <div className="contact-card"><Card5></Card5></div>
          <div className="contact-card"><Card5></Card5></div>
          <div className="contact-card"><Card5></Card5></div>
          <div className="contact-card"><Card5></Card5></div>
          </div>  
        </div>
    </div>  )
}
