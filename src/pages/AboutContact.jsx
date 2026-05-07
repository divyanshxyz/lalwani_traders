import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './AboutContact.css';

const AboutContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>About Us & Contact | Shri Lalwani Traders</title>
        <meta name="description" content="Learn about our legacy, quality commitment, and get in touch with Shri Lalwani Traders." />
      </Helmet>

      {/* Page Header */}
      <div className="page-header about-header">
        <div className="container">
          <h1 className="page-title animate-fade-in-up">Our Story & Contact</h1>
          <p className="page-subtitle animate-fade-in-up">Serving tradition since decades</p>
        </div>
      </div>

      {/* About Section */}
      <section className="section section-light">
        <div className="container">
          <div className="about-layout">
            <div className="about-content">
              <h2 className="section-title">The Shri Lalwani Traders Legacy</h2>
              <p className="about-text">
                Shri Lalwani Traders has been a household name for authentic Indian delicacies. We specialize in traditional snacks that bring the taste of India to your home.
              </p>
              <p className="about-text">
                Our legacy is built on a simple principle: quality should never be compromised. We source only the finest, premium ingredients—pure jaggery, high-quality nuts, and fresh sesame seeds—to ensure every bite is a moment of joy.
              </p>
              <p className="about-text">
                Today, we continue to serve our customers with the same passion and dedication. We are committed to maintaining the traditional, authentic taste of gajak, chikki, and revri while ensuring the highest standards of hygiene and quality.
              </p>
              
              <div className="quality-commitment">
                <h3>Our Promise to You</h3>
                <ul>
                  <li>100% Natural & Pure Ingredients</li>
                  <li>Traditional Authentic Recipes</li>
                  <li>Fresh Stock Prepared Regularly</li>
                  <li>Premium Quality in Every Pack</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-beige" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">We'd love to hear from you. Send us a message or visit our store.</p>
          </div>

          <div className="contact-layout">
            
            {/* Contact Info & Map */}
            <div className="contact-info-panel">
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon"><MapPin size={24} /></div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>
                      <a href="https://maps.google.com/?q=Aminabad+Rd,+near+Jamuna+Agencies,+Ganeshganj,+Swadeshi+Market,+Aminabad,+Lucknow,+Uttar+Pradesh+226018" target="_blank" rel="noopener noreferrer">
                        Aminabad Rd, near Jamuna Agencies, Ganeshganj, Swadeshi Market, Aminabad<br/>Lucknow, Uttar Pradesh 226018
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon"><Phone size={24} /></div>
                  <div>
                    <h4>Call Us</h4>
                    <p>
                      <a href="tel:+919415419175">+91 9415419175</a>
                    </p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon"><Mail size={24} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>
                      <a href="mailto:hello@shrilalwanitraders.in">hello@shrilalwanitraders.in</a>
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon"><Clock size={24} /></div>
                  <div>
                    <h4>Opening Hours</h4>
                    <p>Mon - Sat: 10:00 AM - 9:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed (Placeholder using iframe) */}
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8524793167608!2d80.9225612!3d26.844644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdb74cd0e3fb:0x6e5008c0188c3af2!2sShri+Lalwani+Traders!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-panel">
              <h3 className="form-title">Send us a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="alert-success">
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    placeholder="Custom Cake Inquiry"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows="5"
                    placeholder="Tell us what you need..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContact;
