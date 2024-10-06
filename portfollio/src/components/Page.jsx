import React from 'react'
import "./Page.css"
import Navpan from './unique_component/Navpan'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'

export default function Page() {
  return (
    <>
    <div className="main-page">
    <Navpan></Navpan>
    <Page1></Page1>
    <Page2></Page2>
    <Page3></Page3>
    <Page4></Page4>
    <Page5></Page5>
    <Page6></Page6>
    <Page8></Page8>
    {/* <Page7></Page7> */}
    </div>
    </>
  )
}
