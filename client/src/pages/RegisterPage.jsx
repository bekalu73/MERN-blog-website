import React from "react";

function RegisterPage() {
  return (
    <form className="register">
      <h2>Register Here!</h2>
      <input type="text" placeholder="Enter Username" />
      <input type="password" placeholder="Enter Password" />
      <button>Register</button>
    </form>
  );
}

export default RegisterPage;
