import React from 'react'
import "./Dashboard.css"
import Button from 'react-bootstrap/Button';
import "./Profile.css"
import image from "/images/image.png"

import DashboardSidebar from './DashboardSidebar'

export default function Profile() {
  return (
    <div className="admin-dashboard">
      <div className="dasboard-left"><DashboardSidebar></DashboardSidebar></div>
      <div className="dasboard-right">
        <div className="das-right-top">
          <div>Profile</div>
        </div>
        
        <div className="admin-profile-heading">
          Personal Details :
        </div>
        <div className="admin-profile-container">
            <div>Name : <input type="text" placeholder='name' value={"Mohit Soni"} /></div>
            <div>Email : <input type="text" placeholder='name' value={"mohitsonip1847@gmail.com"} /></div>
            <div>Phone No. : <input type="text" placeholder='name' value={"+91 9893101245"} /></div>
            <div>WhatsApp : <input type="text" placeholder='name' value={"+91 9589571577"} /></div>
            <div className="admin-profile-image">
              <div>
              <img src={image} alt="" />
              </div>
              </div>
            <div className="admin-profile-image">
              <div>
              <img src={image} alt="" />
              </div>
              </div>

            <div><input type="file" /></div>
            <div><input type="file" /></div>

        </div>

      </div>
    </div>
  )
}
