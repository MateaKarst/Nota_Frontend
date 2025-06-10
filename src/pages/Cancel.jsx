import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 15000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  const styles = {
    container: {
      background: "linear-gradient(135deg, #A30135, #E29C05)",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#a80000",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
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
    note: {
      marginTop: "1rem",
      fontSize: "1rem",
      color: "#700000",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>❌ Payment Canceled</h1>
      <p style={styles.message}>You can try again at any time.</p>
      <p style={styles.note}>Redirecting to home page in 5 seconds...</p>
    </div>
  );
};

export default Cancel;
