import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Page8 from './components/pages/Page8';
import Login from './components/admin/Login';
import Page from './components/Page';
//admin component
import Dashboard from './components/admin/Dashboard';
import ProtectedRoute from './ProtectedRoute';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>

          </Route>

          {/* <Route path="*" element={<NoPage />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
