import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/login">Logga in</Link>
        <span> | </span>
        <Link to="/register">Registrera</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {}
        <Route
          path="/"
          element={
            <div>
              <h1>Välkommen till Recipedia!</h1>
              <p>Klicka på länkarna ovan för att logga in eller registrera dig.</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
