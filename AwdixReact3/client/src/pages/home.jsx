import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>
      <div className="home-content">
        <button onClick={() => navigate("/login")} className="home-button">
          Go to Login
        </button>
        <button onClick={() => navigate("/register")} className="home-button">
          Go to Register
        </button>
      </div>
    </div>
  );
}

export default Home;
