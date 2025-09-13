// App.jsx
import React, { useState } from "react";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);

  const sectionStyle = {
    padding: "80px 20px",
    textAlign: "center",
    color: "#e0e0e0",
    backgroundColor: "#111",
  };

  const cardStyle = {
    backgroundColor: "#222",
    border: "1px solid #9b59b6",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    maxWidth: "300px",
    display: "inline-block",
    verticalAlign: "top",
  };

  const buttonStyle = {
    backgroundColor: "#9b59b6",
    color: "#111",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const popupStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const popupContentStyle = {
    backgroundColor: "#222",
    padding: "40px",
    borderRadius: "10px",
    border: "1px solid #9b59b6",
    textAlign: "center",
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    position: "sticky",
    top: 0,
    backgroundColor: "#111",
    zIndex: 1000,
    borderBottom: "1px solid #333",
  };

  const linkStyle = { color: "#e0e0e0", margin: "0 10px", textDecoration: "none" };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#111", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav style={navbarStyle}>
        <div style={{ color: "#9b59b6", fontSize: "24px", fontWeight: "bold" }}>RakshakX</div>
        <div>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#features" style={linkStyle}>Features</a>
          <a href="#pricing" style={linkStyle}>Pricing</a>
          <a href="#terms" style={linkStyle}>Terms</a>
          <a href="#about" style={linkStyle}>About</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" style={sectionStyle}>
        <h1 style={{ fontSize: "60px", color: "#9b59b6", marginBottom: "20px" }}>RakshakX</h1>
        <p style={{ fontSize: "24px", marginBottom: "20px" }}>Your Safety, Our Mission</p>
        <button style={buttonStyle} onClick={togglePopup}>Install App</button>
        {showPopup && (
          <div style={popupStyle}>
            <div style={popupContentStyle}>
              <p style={{ marginBottom: "20px", fontSize: "18px" }}>Coming Soon</p>
              <button style={buttonStyle} onClick={togglePopup}>Close</button>
            </div>
          </div>
        )}
      </section>

      {/* Features */}
      <section id="features" style={sectionStyle}>
        <h2 style={{ color: "#9b59b6", fontSize: "32px", marginBottom: "40px" }}>Features</h2>
        <div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Free Features</h3>
            <ul style={{ textAlign: "left" }}>
              <li>SMS Alerts</li>
              <li>Live Location</li>
            </ul>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Premium Features</h3>
            <ul style={{ textAlign: "left" }}>
              <li>SMS Alerts</li>
              <li>Live Location</li>
              <li>Emergency Calls</li>
              <li>Back Camera Video Recording</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={sectionStyle}>
        <h2 style={{ color: "#9b59b6", fontSize: "32px", marginBottom: "20px" }}>Pricing</h2>
        <div>
          <div style={cardStyle}>
            <h3>1 Month</h3>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>₹39</p>
          </div>
          <div style={cardStyle}>
            <h3>6 Months</h3>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>₹189</p>
          </div>
          <div style={cardStyle}>
            <h3>1 Year</h3>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>₹299</p>
          </div>
        </div>
        <p style={{ marginTop: "10px" }}>Payments powered by Razorpay</p>
      </section>

      {/* About */}
      <section id="about" style={sectionStyle}>
        <h2 style={{ color: "#9b59b6", fontSize: "32px", marginBottom: "20px" }}>About RakshakX</h2>
        <p>RakshakX is a personal safety app that helps you alert your emergency contacts with live location and SOS alerts instantly.</p>
      </section>

      {/* Terms */}
      <section id="terms" style={sectionStyle}>
        <div style={{ backgroundColor: "#222", padding: "20px", borderRadius: "10px", maxHeight: "500px", overflowY: "auto" }}>
          <h2 style={{ color: "#9b59b6", fontSize: "24px", marginBottom: "10px" }}>Terms and Conditions</h2>
          <p><strong>Effective Date:</strong> [Insert Date]</p>
          <p>Welcome to <strong>RakshakX</strong>. By downloading, installing, or using this application (“App”), you agree to comply with and be bound by the following Terms and Conditions.</p>
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>1. Acceptance of Terms</h3>
          <p>By using RakshakX, you agree to these terms and our Privacy Policy.</p>
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>2. Service Description</h3>
          <ul>
            <li>Send live location to saved contacts</li>
            <li>Send SMS alerts</li>
            <li>Emergency calls (premium users)</li>
            <li>Back camera video recording (premium users)</li>
          </ul>
          <p>The app is intended for emergency situations only.</p>
          <p style={{ marginTop: "10px" }}>Contact: shezadasaif15@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
