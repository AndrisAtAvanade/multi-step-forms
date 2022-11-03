import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import FormStep1 from "./pages/forms/FormStep1";
import FormStep2 from "./pages/forms/FormStep2";
import FormStep3 from "./pages/forms/FormStep3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<FormPage />}>
          <Route path="step1" element={<FormStep1 />} />
          <Route path="step2" element={<FormStep2 />} />
          <Route path="step3" element={<FormStep3 />} />
        </Route>
        <Route path="*" element={<div>Ups! 404 is here. <Link to="/">Return to Homepage</Link></div>} />
      </Routes>
    </Router>
  );
}

export default App;
