import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from "./components/AuthPage"; 
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Publika sidor */}
        <Route path="/auth" element={<AuthPage />} />
        {/* Skyddade sidor */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          {}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;