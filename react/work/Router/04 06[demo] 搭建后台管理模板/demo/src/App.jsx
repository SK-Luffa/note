import React from 'react';

import Login from './components/Pages/Login';
import Admin from './components/Pages/Admin';
// import Wecome from "./components/Pages/Wecome"
import  { BrowserRouter as Router, Route, Routes } from "react-router-dom"
 
const App = () => {
  return (
    <div>
      <div>
        
      </div>
      <Router>
        <Routes>
       
          <Route path="/login" element={<Login />} />
          <Route path="/Admin/*" element={<Admin />} />
        {/* <Route path="/" element={<Wecome />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;