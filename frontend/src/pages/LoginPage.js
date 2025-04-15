// src/pages/LoginPage.js
import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const handleLogin = (token) => {
    localStorage.setItem("jwt", token);
    alert("Inloggning lyckades!");
    
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
