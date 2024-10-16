import React from 'react';
import newsletterBackground1 from '../asset/Element (1).png';
import newsletterBackground2 from '../asset/Element.png';
import emailIcon from '../asset/Group 46.png';
import logo from '../asset/logo.png';
import socialIcons from '../asset/Social.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-content" id='login'>
        <img src={newsletterBackground1} alt="Newsletter background" className="newsletter-background-1" />
        <img src={newsletterBackground2} alt="Newsletter background" className="newsletter-background-2" />
        <div className="newsletter-text">
          <h2 className="newsletter-title">Subscribe and get exclusive deals & offer</h2>
          <form className="newsletter-form">
            <div className="newsletter-input-wrapper">
              <img src={emailIcon} alt="Email icon" className="newsletter-icon" />
              <input type="email" placeholder="Enter your mail" aria-label="Enter your email" className="newsletter-input" />
            </div>
            <button type="submit" className="newsletter-submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand-column">
            <div className="footer-brand-content">
              <div className="footer-logo-wrapper">
                <span className="footer-logo-text">Trabook</span>
                <img src={logo} alt="Trabook logo" className="footer-logo-icon" />
              </div>
              <p className="footer-description">Book your trip in minute, get full Control for much longer.</p>
              <img src={socialIcons} alt="Social media icons" className="footer-social-icons" />
            </div>
          </div>
          <div className="footer-links-column">
            <nav className="footer-links-list">
              <h3 className="footer-links-title">Company</h3>
              <a href="#" className="footer-link">About</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Logistic</a>
            </nav>
          </div>
          <div className="footer-links-column">
            <nav className="footer-links-list">
              <h3 className="footer-links-title">Contact</h3>
              <a href="#" className="footer-link">Help/FAQ</a>
              <a href="#" className="footer-link">Press</a>
              <a href="#" className="footer-link">Affiliates</a>
            </nav>
          </div>
          <div className="footer-links-column">
            <nav className="footer-links-list">
              <h3 className="footer-links-title">More</h3>
              <a href="#" className="footer-link">Press Centre</a>
              <a href="#" className="footer-link">Our Blog</a>
              <a href="#" className="footer-link">Low fare tips</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">Copyright, Trabook 2022. All rights reserved.</p>
          <a href="#" className="footer-terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
