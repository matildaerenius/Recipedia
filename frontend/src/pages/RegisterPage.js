import React from "react";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  const handleRegister = (token) => {
    localStorage.setItem("jwt", token);
    console.log("Registrering lyckades! Token sparad:", token);
  };

  return (
    <div>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
}

export default RegisterPage;
