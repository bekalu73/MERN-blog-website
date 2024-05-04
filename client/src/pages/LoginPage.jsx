import React from "react";

function loginPage() {
  return (
    <form className="login">
      <h2>Login Here!</h2>
      <input type="text" placeholder="Enter Username" />
      <input type="password" placeholder="Enter Password" />
      <button>Login</button>
    </form>
  );
}

export default loginPage;
