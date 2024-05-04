import React, { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-type": "application/json" },
    });
    if (!response.ok) {
      return console.log("Registration Faild");
    } else {
      console.log("Successfully Register");
    }
  };

  return (
    <form className="register" onSubmit={register}>
      <h2>Register Here!</h2>
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
      <button>Register</button>
    </form>
  );
}

export default RegisterPage;
