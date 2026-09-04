"use client";
import { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "./RouterShims";
const logo = "/assets/logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper function to close the menu
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      {/* Closes menu if user clicks logo to go home */}
      <Link to="/" className="title" onClick={closeMenu}>
        <img src={logo} alt="ThinkPath Logo" />
      </Link>

      {/* Hamburger menu toggle button */}
      <div
        className={`menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Adding closeMenu to all links so drawer slides shut on navigation */}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/rider" onClick={closeMenu}>
            Rider
          </NavLink>
        </li>
        <li>
          <NavLink to="/vendor" onClick={closeMenu}>
            Vendor
          </NavLink>
        </li>
        <li>
          <NavLink to="/support" onClick={closeMenu}>
            Support
          </NavLink>
        </li>

        <li className="pd-left">
          <NavLink to="/" className="login active" onClick={closeMenu}>
            Download
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
