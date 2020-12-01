import React from "react";
import "../App.css";
import { Button } from "./button";
import "../styles/hero-section.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>PERFORMANCE</h1>
      <p>Be a part of the Fast Garage Family</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
