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

      {/* Terms & Conditions */}
      <section id="terms" style={sectionStyle}>
        <div className="bg-gray-800 p-6 rounded-lg text-gray-300 max-h-[80vh] overflow-y-auto" style={{ backgroundColor: "#222", padding: "20px", borderRadius: "10px", maxHeight: "500px", overflowY: "auto" }}>
          <h2 style={{ color: "#9b59b6", fontSize: "24px", marginBottom: "10px" }}>Terms and Conditions</h2>
          <p><strong>Effective Date:</strong> [Insert Date]</p>
          <p>Welcome to <strong>RakshakX</strong>. By downloading, installing, or using this application (“App”), you agree to comply with and be bound by these Terms and Conditions. If you do not agree, do not use the App.</p>
          
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>1. Acceptance of Terms</h3>
          <p>By using RakshakX, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, our Privacy Policy, and any other guidelines.</p>
          
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>2. Description of the Service</h3>
          <p>RakshakX is an emergency SOS and personal safety application. Features include:</p>
          <ul style={{ textAlign: "left", marginLeft: "20px" }}>
            <li>Sending live location to saved emergency contacts</li>
            <li>Sending SMS alerts</li>
            <li>Making emergency calls (premium users)</li>
            <li>Back camera video recording during emergencies (premium users)</li>
          </ul>
          <p>The App is intended for <strong>emergency situations only</strong>.</p>
          
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>3. Eligibility</h3>
          <ul style={{ textAlign: "left", marginLeft: "20px" }}>
            <li>You must be at least 13 years old to use this App.</li>
            <li>Users under 18 need parental consent.</li>
            <li>No illegal or harmful use allowed.</li>
          </ul>
          
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>4. User Responsibilities</h3>
          <ul style={{ textAlign: "left", marginLeft: "20px" }}>
            <li>Provide accurate emergency contact info.</li>
            <li>Ensure contacts consent to alerts.</li>
            <li>No false alarms or misuse.</li>
            <li>Responsible for your device/data usage.</li>
          </ul>
          
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>5. Payment and Subscription</h3>
          <p>Free users: SMS + location. Premium users: additional features. Fees, billing, and refunds are explained in-app.</p>
          
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>6. Privacy and Data Usage</h3>
          <p>The App collects personal info like location and contacts for emergency purposes only.</p>
          
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>7. Limitation of Liability</h3>
          <p>RakshakX and developers are not liable for damages from use or inability to use the App.</p>
          
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>8. Indemnification</h3>
          <p>You agree to indemnify RakshakX for any claims arising from misuse of the App.</p>
          
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>9. Modifications to the Terms</h3>
          <p>RakshakX may update these Terms anytime. Continued use = acceptance.</p>
          
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>10. Termination</h3>
          <p>Access may be terminated if you violate these Terms or misuse the App.</p>
          
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>11. Governing Law</h3>
          <p>These Terms are governed by Indian law. Disputes fall under Indian courts.</p>
          
          <h3 style={{ color: "#bb8fce", marginTop: "10px" }}>12. Contact Information</h3>
          <p>Email: shezadasaif15@gmail.com<br/>Address: [Insert Company Address]</p>
          
          <p style={{ marginTop: "10px" }}>By using RakshakX, you acknowledge that you have read, understood, and agree to these Terms and Conditions.</p>
        </div>
      </section>
    </div>
  );
}
