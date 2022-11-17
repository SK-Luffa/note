import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" 

const App = () => {
  return (
    <div>
      <Layout />
      <Router>
        <Routes>
          <Route path="/" element={Layout} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;