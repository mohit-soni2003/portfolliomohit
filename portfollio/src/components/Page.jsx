import React from 'react'
import "./Page.css"
import Navpan from './Navpan'
import Page1 from './pages/Page1'

export default function Page() {
  return (
    <>
    <div className="main-page">
    <Navpan></Navpan>
    <Page1></Page1>
    </div>
    </>
  )
}
