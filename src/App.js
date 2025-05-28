"use client"

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./context/ProtectedRoutes"; // Your ProtectedRoute component
import { AuthProvider } from "./context/AuthProvider";
import { appRoutes } from "./routes/routesConfig"; // Adjust path as needed

import "./App.css"

function App() {
  return (
    <AuthProvider>
      <Router>
        <ProtectedRoute>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </ProtectedRoute>
      </Router>
    </AuthProvider>
  );
}

export default App;



