import React, { useState } from "react";
import "./AuthPage.css";

export default function AuthPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [rightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  // Funktion för att hantera inloggning
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("jwt", data.token); 
        alert("Inloggning lyckades!");
      } else {
        alert("Inloggning misslyckades!");
      }
    } catch (error) {
      console.error(error);
      alert("Något gick fel vid inloggning");
    }
  };

  // Funktion för att hantera registrering
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: registerName,
          email: registerEmail,
          password: registerPassword,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("jwt", data.token); 
        alert("Registrering lyckades!");
      } else {
        alert("Registrering misslyckades!");
      }
    } catch (error) {
      console.error(error);
      alert("Något gick fel vid registrering");
    }
  };

  return (
    <div className={`container-auth ${rightPanelActive ? "right-panel-active" : ""}`}>
      {/* Inloggningsformulär */}
      <div className="form-container sign-in-container">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <a href="/">Forgot your password?</a>
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Registreringsformulär */}
      <div className="form-container sign-up-container">
        <form onSubmit={handleRegister}>
          <h1>Create Account</h1>
          <input
            type="text"
            placeholder="Name"
            value={registerName}
            onChange={(e) => setRegisterName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>

      {/* Overlay med knappar för att växla vy */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="ghost" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
