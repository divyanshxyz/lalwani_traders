import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ShoppingBag } from 'lucide-react';

const FacebookIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const TwitterIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-cream">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <ShoppingBag className="logo-icon" />
              <span>Lalwani Traders</span>
            </Link>
            <p className="footer-desc">
              Freshly baked happiness every day. We craft premium cakes, pastries, breads, and snacks with love and the finest ingredients.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Our Menu</h4>
            <ul className="footer-links">
              <li><Link to="/menu">Custom Cakes</Link></li>
              <li><Link to="/menu">Fresh Pastries</Link></li>
              <li><Link to="/menu">Cookies & Biscuits</Link></li>
              <li><Link to="/menu">Daily Breads</Link></li>
              <li><Link to="/menu">Savory Snacks</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} className="contact-icon" />
                <a href="https://maps.google.com/?q=23,+Aminabad+Rd,+near+Jamuna+Agencies,+Ganeshganj,+Swadeshi+Market,+Aminabad,+Lucknow,+Uttar+Pradesh+226018" target="_blank" rel="noopener noreferrer">
                  23, Aminabad Rd, near Jamuna Agencies, Ganeshganj, Swadeshi Market, Aminabad, Lucknow, Uttar Pradesh 226018
                </a>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+919140589383">
                  +91 9140589383
                </a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:hello@lalwanitraders.in">
                  hello@lalwanitraders.in
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Lalwani Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
