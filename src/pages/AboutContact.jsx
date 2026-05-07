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
        <title>About Us & Contact | Lalwani Traders Bakery</title>
        <meta name="description" content="Learn about our bakery story, quality commitment, and get in touch with Lalwani Traders." />
      </Helmet>

      {/* Page Header */}
      <div className="page-header about-header">
        <div className="container">
          <h1 className="page-title animate-fade-in-up">Our Story & Contact</h1>
          <p className="page-subtitle animate-fade-in-up">Baking memories since 2010</p>
        </div>
      </div>

      {/* About Section */}
      <section className="section section-light">
        <div className="container">
          <div className="about-layout">
            <div className="about-content">
              <h2 className="section-title">The Lalwani Traders Legacy</h2>
              <p className="about-text">
                What started as a humble home kitchen has blossomed into one of the city's most beloved bakeries. Lalwani Traders was founded on a simple principle: baking should be an act of love.
              </p>
              <p className="about-text">
                Our founder believed that every celebration, big or small, deserves a cake that not only looks stunning but tastes absolutely divine. We source only the finest, premium ingredients—real butter, rich cocoa, and fresh seasonal fruits—to ensure every bite is a moment of joy.
              </p>
              <p className="about-text">
                Today, our skilled artisans wake up before dawn to knead fresh dough and whip up fluffy creams. We are committed to maintaining the traditional, authentic taste while constantly innovating to bring you exciting new flavors.
              </p>
              
              <div className="quality-commitment">
                <h3>Our Promise to You</h3>
                <ul>
                  <li>100% Eggless Options Available</li>
                  <li>No Artificial Preservatives in Breads</li>
                  <li>Baked Fresh Every Single Morning</li>
                  <li>Custom Designs for Every Occasion</li>
                </ul>
              </div>
            </div>
            <div className="about-images">
              <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" alt="Bakery Interior" className="about-img main-img" />
              <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1050&auto=format&fit=crop" alt="Baking Process" className="about-img sub-img" />
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
                      <a href="tel:+919140589383">+91 9140589383</a>
                    </p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon"><Mail size={24} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>
                      <a href="mailto:hello@lalwanitraders.in">hello@lalwanitraders.in</a><br/>
                      <a href="mailto:orders@lalwanitraders.in">orders@lalwanitraders.in</a>
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon"><Clock size={24} /></div>
                  <div>
                    <h4>Opening Hours</h4>
                    <p>Mon - Sat: 8:00 AM - 9:00 PM<br/>Sunday: 9:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed (Placeholder using iframe) */}
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889691901111!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
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
