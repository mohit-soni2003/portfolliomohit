import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Page8 from './components/pages/Page8';
import Login from './components/admin/Login';
import Page from './components/Page';
//admin component
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './components/admin/Dashboard';
import Achievement from "./components/admin/Achievement";
import AdminUser from "./components/admin/AdminUser"
import Analytics from "./components/admin/Analytics"
import ContactsReq from "./components/admin/ContactsReq"
import Education from "./components/admin/Education"
import Profile from "./components/admin/Profile"
import Projects from "./components/admin/Projects"
import Skill from "./components/admin/Skill"
import Maintainence from "./components/unique_component/Maintainence"



function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Page />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Maintainence />}></Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/achievement" element={<Achievement />}></Route>
            <Route path="/adduser" element={<AdminUser />}></Route>
            <Route path="/analytics" element={<Analytics />}></Route>
            <Route path="/contactreq" element={<ContactsReq />}></Route>
            <Route path="/education" element={< Education/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/skill" element={<Skill />}></Route>
            <Route path="/profile" element={<Profile />}></Route>

          </Route>

          {/* <Route path="*" element={<NoPage />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
