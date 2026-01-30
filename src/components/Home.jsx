import React from "react";
import "./Home.css";

const Home= () => {
  return (
    <div className="coming-container">
      <div className="overlay">
        <div className="content">
          <h1> Kaveri Catering</h1>
          <p className="tagline">
            Delicious Moments, Crafted with Love
          </p>

          <h2 className="coming-text">Coming Soon</h2>

          <p className="desc">
            We are preparing something special for your weddings,
            events, and celebrations.
          </p>

          <div className="contact">
            <p></p>
            <p>📍 Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;