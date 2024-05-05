import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-type": "application/json" },
      credentials: "include",
    });
    if (!response.ok) {
      return console.log("Login Faild");
    } else {
      console.log("Successfully Logged in");
      setRedirect(true);
    }
    if (redirect) {
      return navigate("/");
    }
  };

  return (
    <form className="login" onSubmit={loginHandler}>
      <h2>Login Here!</h2>
      <input
        type="text"
        value={username}
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
}

export default LoginPage;
