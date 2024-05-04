import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <Link to="/">
        <h2 className="logo">My Blogs</h2>
      </Link>
      <div className="nav-links">
        <Link to="/login" className="login">
          Login
        </Link>
        <Link to="/register" className="logout">
          Register
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
