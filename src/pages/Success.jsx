import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/variables.css';


function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); 
    }, 15000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}> Payment succeeded!</h1>
      <p style={styles.message}>
      Thank you for your purchase. You will be automatically redirected to the homepage.
      </p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6e8efb, #a777e3)",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "var(--font-family-secondary)",
    fontSize: "var(--Size-head-text-h5-h6, 34px)",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "51px",
    marginBottom: "2.5rem",
    animation: "slideDown 1s ease-out",
  },
  message: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "var(--font-family-primary)",
    fontSize: "var(--Size-head-text-h5-h6, 16px)",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "51px",
    marginBottom: "2.5rem",
    animation: "slideDown 1s ease-out",
  },

};

export default Success;
