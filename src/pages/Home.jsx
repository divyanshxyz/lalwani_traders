import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Clock, Truck, Award, Heart } from 'lucide-react';

const InstagramIcon = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
import './Home.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Shri Lalwani Traders | Authentic Indian Delicacies</title>
        <meta name="description" content="Authentic Indian delicacies such as gajak, chikki, revri, and namkeens. Quality products from Shri Lalwani Traders." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content animate-fade-in-up">
          <span className="hero-badge">Welcome to Shri Lalwani Traders</span>
          <h1 className="hero-title">Authentic Indian Delicacies</h1>
          <p className="hero-subtitle">
            Gajak, chikki, revri, namkeens, and more. Made with tradition, passion, and the finest ingredients.
          </p>
          <div className="hero-cta">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Order Now
            </a>
            <Link to="/menu" className="btn btn-primary">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-cols-4 highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon"><Clock size={32} /></div>
              <h3>Fresh Stock</h3>
              <p>Freshly prepared stock for the best taste and crunch.</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon"><Heart size={32} /></div>
              <h3>Authentic Taste</h3>
              <p>Crafted by following traditional Indian recipes.</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon"><Truck size={32} /></div>
              <h3>Fast Delivery</h3>
              <p>Quick and safe delivery right to your doorstep.</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon"><Award size={32} /></div>
              <h3>Premium Quality</h3>
              <p>Only the finest ingredients used in our recipes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="section section-beige">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Best Sellers</h2>
            <p className="section-subtitle">Discover the absolute favorites loved by our customers</p>
          </div>

          <div className="grid grid-cols-3">
            {/* Product 1 */}
            <div className="card product-card">
              <div className="product-info">
                <h3 className="product-name">Special Gud Gajak</h3>
                <p className="product-desc">Traditional winter delicacy made with premium jaggery and sesame seeds.</p>
                <div className="product-footer">
                  <span className="product-price">₹450 <span className="price-unit">/ kg</span></span>
                  <a href="https://wa.me/919876543210?text=I'd like to order Special Gud Gajak" className="btn btn-primary btn-sm">Order</a>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="card product-card">
              <div className="product-info">
                <h3 className="product-name">Peanut Chikki</h3>
                <p className="product-desc">Crunchy peanuts blended with sweet jaggery for the perfect snack.</p>
                <div className="product-footer">
                  <span className="product-price">₹350 <span className="price-unit">/ kg</span></span>
                  <a href="https://wa.me/919876543210?text=I'd like to order Peanut Chikki" className="btn btn-primary btn-sm">Order</a>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="card product-card">
              <div className="product-info">
                <h3 className="product-name">Special Namkeen Mix</h3>
                <p className="product-desc">A spicy and savory blend of traditional Indian namkeens.</p>
                <div className="product-footer">
                  <span className="product-price">₹280 <span className="price-unit">/ 500g</span></span>
                  <a href="https://wa.me/919876543210?text=I'd like to order Special Namkeen Mix" className="btn btn-primary btn-sm">Order</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/menu" className="btn btn-secondary">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Fresh Breads Section (Side-by-side) */}
      <section className="section section-light">
        <div className="container">
          <div className="fresh-bread-layout">
            <div className="fresh-bread-content">
              <span className="section-tag">Pure & Authentic</span>
              <h2 className="section-title">Authentic Indian Delicacies</h2>
              <p className="fresh-bread-desc">
                Our products are made using traditional methods, taking time to develop the perfect flavor and crunch. From winter special gajak to year-round chikki, experience the true taste of authentic Indian snacks.
              </p>
              <ul className="fresh-bread-list">
                <li><Award size={20} className="text-warm-brown"/> 100% Natural Ingredients</li>
                <li><Award size={20} className="text-warm-brown"/> No Artificial Preservatives</li>
                <li><Award size={20} className="text-warm-brown"/> Traditional Hand-crafted Process</li>
              </ul>
              <Link to="/menu" className="btn btn-primary">Discover Products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-cream">
        <div className="container text-center">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">The love we receive from our wonderful community</p>

          <div className="grid grid-cols-3">
            <div className="testimonial-card">
              <div className="stars">
                <Star size={18} fill="#ffc107" color="#ffc107" />
                <Star size={18} fill="#ffc107" color="#ffc107" />
                <Star size={18} fill="#ffc107" color="#ffc107" />
                <Star size={18} fill="#ffc107" color="#ffc107" />
                <Star size={18} fill="#ffc107" color="#ffc107" />
              </div>
              <p className="testimonial-text">"The Gud Gajak was absolutely divine! It was so fresh and crunchy. Best quality in Lucknow."</p>
              <h4 className="testimonial-author">- Priya S.</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                <Star size={18} fill="#ffc107" color="#ffc107" />
                <Star size={18} fill="#ffc107" color="#ffc107" />
                <Star size={18} fill="#ffc107" color="#ffc107" />
                <Star size={18} fill="#ffc107" color="#ffc107" />
                <Star size={18} fill="#ffc107" color="#ffc107" />
              </div>
              <p className="testimonial-text">"I buy my monthly namkeen stock from Shri Lalwani Traders. The mix is the best I've had. Highly recommended!"</p>
              <h4 className="testimonial-author">- Rahul M.</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                <Star size={18} fill="#ffc107" color="#ffc107" />
                <Star size={18} fill="#ffc107" color="#ffc107" />
                <Star size={18} fill="#ffc107" color="#ffc107" />
                <Star size={18} fill="#ffc107" color="#ffc107" />
                <Star size={18} fill="#ffc107" color="#ffc107" />
              </div>
              <p className="testimonial-text">"Their chikki is amazing. Perfectly sweet and very healthy. Thank you for maintaining such quality."</p>
              <h4 className="testimonial-author">- Anjali K.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="section section-light">
        <div className="container text-center">
          <h2 className="section-title">Follow Us</h2>
          <p className="section-subtitle">@ShriLalwaniTraders</p>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2a13.93 13.93 0 0 0-11.83 21.36L2 30l6.81-2.14A13.94 13.94 0 1 0 16 2zm0 25.54a11.53 11.53 0 0 1-5.88-1.61l-.42-.25-4.37 1.37 1.4-4.22-.28-.44A11.55 11.55 0 1 1 16 27.54zm6.54-8.9c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.8.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09a9.54 9.54 0 0 1-4.74-4.14c-.21-.37 0-.57.18-.75.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.8-1.92-1.1-2.64-.28-.69-.57-.6-.8-.6h-.69c-.24 0-.63.09-.96.45s-1.26 1.23-1.26 3.03 1.29 3.54 1.47 3.78c.18.24 2.58 3.93 6.24 5.52.87.39 1.56.63 2.1.81.87.27 1.68.24 2.31.15.72-.12 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.18-.33-.27-.69-.45z" fill="white"></path>
        </svg>
      </a>
    </>
  );
};

export default Home;
