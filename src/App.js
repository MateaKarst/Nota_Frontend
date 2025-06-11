"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./context/ProtectedRoutes";
import { AuthProvider } from "./context/AuthProvider";
import { appRoutes } from "./routes/routesConfig";
import NavBar from "./components/Navigation/NavBar";

import "./App.css";

function AppWrapper() {
  const location = useLocation();


  const hiddenNavPaths = [
    "/",
    "/onboarding",
    "/login",
    "/create-account",
    "/personalisation",
    "/personalisation2",
    "/personalisation1-filters",
    "/chat",
    "/splash",
    "/record",
    "/music-editor/:id",
    "/pro-page",
    "/plans",

  ];

  const shouldHideNavBar = hiddenNavPaths.includes(location.pathname);

  return (
    <div className="App">
      <div className="mobile-frame">
        <ProtectedRoute>
          <div className={`page-content ${shouldHideNavBar ? "no-navbar" : "with-navbar"}`}>
            <Routes>
              {appRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </div>
          {!shouldHideNavBar && <NavBar />}
        </ProtectedRoute>
      </div>
    </div>
  
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppWrapper />
      </Router>
    </AuthProvider>
  );
}

export default App;


