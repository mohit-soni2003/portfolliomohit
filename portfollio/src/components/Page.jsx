import React from 'react'
import "./Page.css"
import Navpan from './unique_component/Navpan'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

export default function Page() {
  return (
    <>
    <div className="main-page">
    <Navpan></Navpan>
    <Page1></Page1>
    <Page2></Page2>
    <Page3></Page3>
    </div>
    </>
  )
}
