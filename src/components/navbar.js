import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Fast Garage <i className="fab fa-typo3"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
