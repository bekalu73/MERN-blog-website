import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <h2 className="logo">My Blogs</h2>
      <div className="nav-links">
        <a href="#" className="login">
          Login
        </a>
        <a href="#" className="logout">
          Register
        </a>
      </div>
    </header>
  );
}

export default Navbar;
