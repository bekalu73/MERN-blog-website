import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const logout = () => {
    fetch("http://localhost:5000/profile", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    navigate("/login");
  };

  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((userInfo) => {
        setUserInfo(userInfo.username);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  const username = userInfo?.username;
  // console.log(username);

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
            <a onClick={logout}>Log Out</a>
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
