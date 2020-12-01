import React from "react";
import "../../App.css";
import HeroSection from "../hero-section";
import Cards from "../cards";
import Footer from "../footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
