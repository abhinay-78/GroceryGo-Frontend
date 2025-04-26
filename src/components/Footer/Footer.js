import React from "react";
import "./Footer.css"; // Ensure this file exists in the same folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Grocery Go</h3>
          <p>Grocery delivery in minutes. Fresh fruits and vegetables delivered to your doorstep.</p>
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Fruits</li>
            <li>Vegetables</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@grocerygo.in</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Grocery St, Food City, FC 12345</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Grocery Go. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
