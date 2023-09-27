import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        Navbar
      </Link>
      <div className="nav-icons" onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </div>

      <ul className={open ? 'nav-links active' : 'nav-links'}>
        <li>
          <Link className="nav-link">Home</Link>
        </li>
        <li>
          <Link className="nav-link">About</Link>
        </li>
        <li>
          <Link className="nav-link">Contact</Link>
        </li>
        <li>
          <Link className="nav-link">Shop</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
