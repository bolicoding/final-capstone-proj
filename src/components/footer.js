import React, { useState } from "react";
import { Button } from "./button";
import axios from "axios";
import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const handleSignUpSubmission = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/sign-up", email)
      .then((res) => {
        setEmail("");
        console.log("success", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the FG newsletter to receive news and deals!!
        </p>
        <div className="input-areas">
          <form onSubmit={handleSignUpSubmission}>
            <input
              type="email"
              placeholder="Your Email"
              className="footer-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button buttonStyle="btn--outline" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrapper">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Fast Garage <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">Fast Garage © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="https://www.facebook.com/Fast-Garage-Llc-168252353371323"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="https://www.instagram.com/fg_sport_/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
