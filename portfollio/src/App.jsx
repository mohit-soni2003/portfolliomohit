import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from './components/Page';

function App() {
  const [count, setCount] = useState(0)

 return (
  <> 
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page/>}>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </>
 )
}

export default App
