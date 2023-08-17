import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import Expenses from './components/Expenses';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

function App() {
  return (
    <div id="recaptcha-container">

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/expenses" element={<Expenses />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
