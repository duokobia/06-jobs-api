import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Logout from './pages/logout/Logout';
import SignUp from './pages/signup/Signup';


function App() {
  return (
    <Router>
    <div className="App">
      <Header /> 
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-out" element={<Logout />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
};

export default App;
