// src/pages/PlansPage.jsx
import React, { useState } from "react";
import "../styles/pages/plans-page.css";
import NotaLogo from '../components/Logos/NotaLogo';
import BasicBtn from '../components/Buttons/BasicBtn';
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from 'react-router-dom';

// Stripe public key
const stripePromise = loadStripe("pk_test_51RTQK2CWh9wpzDVIFTkfAN10Tu2dYpHHyiPGLRC2w7rArvKFIXIsXLzjrDafSA8PlBXiwWHaqp8jhwLh2WMRTJyk00iKEWjtw7");

// Feature list
const features = [
  "Upload more than 1 track to collaboration",
  "Better import quality",
  "Auto-tune/auto-tempo by AI",
  "Track-by-Track song export",
  "No advertisements",
];

// Plan options
const plans = [
  {
    name: "Hobbyist",
    price: "$5",
    tracks: "2 tracks",
    color: "yellow",
    included: [false, true, false, true, false],
  },
  {
    name: "Creator",
    price: "$10",
    tracks: "3 tracks",
    color: "red",
    included: [true, true, false, true, true],
  },
  {
    name: "Professional",
    price: "$15",
    tracks: "5 tracks",
    color: "purple",
    included: [true, true, true, true, true],
  },
];

const PlansPage = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleClose = () => {
    navigate('/home');
  };

  const handleCheckout = async () => {
    if (selectedPlan === null) {
      alert("Please select a plan first");
      return;
    }

    const plan = plans[selectedPlan];

    try {
      // calling API
      const response = await fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan }),
      });

      const data = await response.json();

      if (!data.id) {
        alert("Payment session could not be created.");
        return;
      }

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred during checkout. Please try again.");
    }
  };

  return (
    <div className="plans-page">
      <div className="top">
        <NotaLogo colorIndex={3} width="110px" height="30px" />
        <button className="close-button" onClick={handleClose}>×</button>
      </div>

      <h2 className="title-plans">
        Try Pro version<br />with new opportunities
      </h2>

      <div className="grid-table">
        <div className="feature-label empty-cell" />
        {plans.map((plan, i) => (
          <div key={i} className={`plan-header-section ${plan.color}`}>
            <div className={`plan-title ${plan.color}`}>{plan.name}</div>
            <div className="plan-price">{plan.price}</div>
          </div>
        ))}

        <div className="feature-label">Tracks in collaboration</div>
        {plans.map((plan, i) => (
          <div key={i} className={`track-count ${plan.color}`}>
            {plan.tracks}
          </div>
        ))}

        {features.map((feature, featureIndex) => (
          <React.Fragment key={featureIndex}>
            <div className="feature-label">{feature}</div>
            {plans.map((plan, planIndex) => (
              <div key={planIndex} className={`checkmark ${plan.color}`}>
                {plan.included[featureIndex] ? "✔" : ""}
              </div>
            ))}
          </React.Fragment>
        ))}

        <div />
        {plans.map((plan, i) => (
          <div key={i} className="radio-select">
            <label className={`custom-radio ${plan.color}`}>
              <input
                type="radio"
                name="plan"
                checked={selectedPlan === i}
                onChange={() => setSelectedPlan(i)}
              />
              <span className="radio-indicator"></span>
            </label>
          </div>
        ))}
      </div>

      <BasicBtn type="main" text="Try now" onClick={handleCheckout} />
    </div>
  );
};

export default PlansPage;
