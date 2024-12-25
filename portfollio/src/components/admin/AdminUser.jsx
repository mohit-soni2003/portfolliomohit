import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import Button from 'react-bootstrap/Button';
import Card6 from '../cards/Card6';
import "./AdminUser.css"

import "./Dashboard.css"
export default function AdminUser() {
  return (
<div className="admin-dashboard">
      <div className="dasboard-left"><DashboardSidebar></DashboardSidebar></div>
      <div className="dasboard-right">
        <div className="das-right-top">
          <div>Admin Users</div>
          <Button variant="light">Add user</Button>
        </div>
        <div className="admin-user-container">
          <div className="admin-user-card"><Card6></Card6></div>
          <div className="admin-user-card"><Card6></Card6></div>
          <div className="admin-user-card"><Card6></Card6></div>
          <div className="admin-user-card"><Card6></Card6></div>
        </div>
      </div>
    </div>
     )
}
