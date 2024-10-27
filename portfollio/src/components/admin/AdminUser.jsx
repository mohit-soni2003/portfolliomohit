import React from 'react'
import DashboardSidebar from './DashboardSidebar'
export default function AdminUser() {
  return (
<div className="admin-dashboard">
        <div className="dasboard-left"><DashboardSidebar></DashboardSidebar></div>
        <div className="dasboard-right">admin user</div>
    </div>  )
}
