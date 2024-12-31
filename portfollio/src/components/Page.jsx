import React from 'react'
import "./Page.css"
import Navpan from './unique_component/Navpan'
import Footerpan from './unique_component/Footerpan'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'
import Projetmodel from './models/Projetmodel'
import Dashboard from './admin/Dashboard'
import Gallery from './pages/Galley'

export default function Page() {
  return (
    <>
      <div className="main-page">

        <div className="main-pg-container">
          <Navpan></Navpan>
          <Page1></Page1>
          <Page2></Page2>
          <Page3></Page3>
          <Page4></Page4>
          <Page5></Page5>
          <Page6></Page6>
          <Gallery></Gallery>
          <Page8></Page8>
        </div>
        <div className="width100">
          <div className="main-footer-container">
            <Footerpan></Footerpan>
          </div>
        </div>
      </div>
    </>
  )
}
