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
        <title>Prakash Bakery | Fresh Cakes, Pastries & Bakery Items</title>
        <meta name="description" content="Freshly baked happiness every day. Cakes, pastries, breads, and snacks made with love at Lalwani Traders." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in-up">
          <span className="hero-badge">Welcome to Lalwani Traders</span>
          <h1 className="hero-title">Freshly Baked Happiness Every Day</h1>
          <p className="hero-subtitle">
            Cakes, pastries, breads, and snacks made with love, passion, and the finest ingredients.
          </p>
          <div className="hero-cta">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Order Now
            </a>
            <Link to="/menu" className="btn btn-secondary hero-btn-alt">
              Explore Menu
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
              <h3>Fresh Daily</h3>
              <p>Baked fresh every morning for the best taste.</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon"><Heart size={32} /></div>
              <h3>Made with Love</h3>
              <p>Crafted by passionate and experienced bakers.</p>
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
              <div className="product-img-wrapper">
                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1089&auto=format&fit=crop" alt="Black Forest Cake" className="product-img" />
                <span className="product-badge">Best Seller</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">Signature Black Forest</h3>
                <p className="product-desc">Rich chocolate sponge layered with fresh cream and cherries.</p>
                <div className="product-footer">
                  <span className="product-price">₹550</span>
                  <a href="https://wa.me/919876543210?text=I'd like to order the Signature Black Forest cake" className="btn btn-primary btn-sm">Order</a>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="card product-card">
              <div className="product-img-wrapper">
                <img src="https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&w=2000&auto=format&fit=crop" alt="Butter Croissants" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Classic Butter Croissants</h3>
                <p className="product-desc">Flaky, buttery, and baked to golden perfection every morning.</p>
                <div className="product-footer">
                  <span className="product-price">₹120 <span className="price-unit">/ 2 pcs</span></span>
                  <a href="https://wa.me/919876543210?text=I'd like to order Classic Butter Croissants" className="btn btn-primary btn-sm">Order</a>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="card product-card">
              <div className="product-img-wrapper">
                <img src="https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=1064&auto=format&fit=crop" alt="Assorted Cookies" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Choco-Chip Cookies</h3>
                <p className="product-desc">Crispy on the outside, chewy on the inside with rich chocolate chips.</p>
                <div className="product-footer">
                  <span className="product-price">₹250 <span className="price-unit">/ 500g</span></span>
                  <a href="https://wa.me/919876543210?text=I'd like to order Choco-Chip Cookies" className="btn btn-primary btn-sm">Order</a>
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
            <div className="fresh-bread-img-box">
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" alt="Fresh Artisan Breads" className="fresh-bread-img" />
            </div>
            <div className="fresh-bread-content">
              <span className="section-tag">Daily Fresh</span>
              <h2 className="section-title">Artisan Breads Baked Daily</h2>
              <p className="fresh-bread-desc">
                Our breads are made using traditional methods, taking time to develop the perfect flavor and crust. From sourdough to whole wheat, experience the true taste of authentic baking.
              </p>
              <ul className="fresh-bread-list">
                <li><Award size={20} className="text-warm-brown"/> 100% Organic Wheat</li>
                <li><Award size={20} className="text-warm-brown"/> No Artificial Preservatives</li>
                <li><Award size={20} className="text-warm-brown"/> Natural Sourdough Starter</li>
              </ul>
              <Link to="/menu" className="btn btn-primary">Discover Breads</Link>
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
              <p className="testimonial-text">"The Black Forest cake was absolutely divine! It was so fresh and the cream was perfect. Everyone at the party loved it."</p>
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
              <p className="testimonial-text">"I buy my daily bread from Lalwani Traders. The sourdough is the best I've had in the city. Highly recommended!"</p>
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
              <p className="testimonial-text">"Their customized birthday cakes are amazing. Beautifully designed and tastes even better. Thank you for making my son's birthday special."</p>
              <h4 className="testimonial-author">- Anjali K.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="section section-light">
        <div className="container text-center">
          <h2 className="section-title">Follow Us on Instagram</h2>
          <p className="section-subtitle">@LalwaniTradersBakery</p>

          <div className="grid grid-cols-4 gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2070&auto=format&fit=crop" alt="Gallery 1" />
              <div className="gallery-overlay"><InstagramIcon /></div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=1064&auto=format&fit=crop" alt="Gallery 2" />
              <div className="gallery-overlay"><InstagramIcon /></div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop" alt="Gallery 3" />
              <div className="gallery-overlay"><InstagramIcon /></div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1605807616950-1d8e057bac88?q=80&w=1074&auto=format&fit=crop" alt="Gallery 4" />
              <div className="gallery-overlay"><InstagramIcon /></div>
            </div>
          </div>
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
