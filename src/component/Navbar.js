import React, { useState } from "react";
import "../component/navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st Logo Part */}
        <div className="logo">
          <h2>
            <span>S</span>hreeji
            <span>T</span>echnical
          </h2>
        </div>

        {/* Menu Part */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/service"> Service </Link>
            </li>
            <li>
              <Link to="/contact"> Contact </Link>
            </li>
          </ul>
        </div>

        {/* #rd Social media links */}

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.facebook.com" target="_shreeji">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_shreeji">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_shreeji">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
          <div
            className="hamburger-menu"
            onClick={() => setShowMediaIcons(!showMediaIcons)}
          >
            <a href="#">
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* <section className="hero-section">
        <p>Welcome To</p>
        <h1>Shreeji Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
