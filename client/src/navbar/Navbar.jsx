import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((userInfo) => {
        setUsername(userInfo.username);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  console.log(username);

  return (
    <header>
      <Link to="/">
        <h2 className="logo">My Blogs</h2>
      </Link>
      <div className="nav-links">
        {username && (
          <>
            <Link to="/create" className="login">
              Create New Post
            </Link>
            <a href="">Log Out</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="login">
              Login
            </Link>
            <Link to="/register" className="register">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
