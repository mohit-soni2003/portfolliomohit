import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Page8 from './components/pages/Page8';
import Login from './components/admin/Login';



import Page from './components/Page';

function App() {
  const [count, setCount] = useState(0)

 return (
  <> 
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
          {/* <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </BrowserRouter>
  </>
 )
}

export default App
