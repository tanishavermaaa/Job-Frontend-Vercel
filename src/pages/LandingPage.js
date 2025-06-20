import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing"
    style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg-job-website.jpg)`}} 
    >
      <div className="overlay">
        <div className="landing-content">
          <h1>Job Application Tracker</h1>
          <p>Stay organized. Track applications. Land your dream job</p>
          <div className="btn-group">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button className="secondary">Register</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
