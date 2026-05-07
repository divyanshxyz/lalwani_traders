import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import './Menu.css';

const menuItems = [
  { id: 1, name: 'Signature Black Forest', category: 'Cakes', price: 550, desc: 'Rich chocolate sponge layered with fresh cream and cherries.', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1089&auto=format&fit=crop' },
  { id: 2, name: 'Pineapple Delight', category: 'Cakes', price: 450, desc: 'Soft vanilla sponge with chunks of sweet pineapple and light cream.', image: 'https://images.unsplash.com/photo-1557925923-33b251d592cd?q=80&w=1074&auto=format&fit=crop' },
  { id: 3, name: 'Red Velvet Cake', category: 'Cakes', price: 650, desc: 'Classic red velvet with rich cream cheese frosting.', image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=1114&auto=format&fit=crop' },
  { id: 4, name: 'Chocolate Truffle Pastry', category: 'Pastries', price: 80, desc: 'Decadent, dense chocolate truffle layers.', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=2003&auto=format&fit=crop' },
  { id: 5, name: 'Fruit Tart', category: 'Pastries', price: 90, desc: 'Crispy tart shell filled with custard and topped with seasonal fruits.', image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=2066&auto=format&fit=crop' },
  { id: 6, name: 'Butter Croissants', category: 'Bread', price: 60, desc: 'Flaky, buttery, and baked to golden perfection every morning.', image: 'https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&w=2000&auto=format&fit=crop' },
  { id: 7, name: 'Artisan Sourdough', category: 'Bread', price: 150, desc: 'Naturally leavened bread with a crispy crust and chewy interior.', image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?q=80&w=1000&auto=format&fit=crop' },
  { id: 8, name: 'Choco-Chip Cookies', category: 'Cookies', price: 250, desc: 'Crispy on the outside, chewy on the inside with rich chocolate chips. (500g)', image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=1064&auto=format&fit=crop' },
  { id: 9, name: 'Almond Biscotti', category: 'Cookies', price: 300, desc: 'Twice-baked almond biscuits, perfect with coffee. (500g)', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2065&auto=format&fit=crop' },
  { id: 10, name: 'Paneer Puff', category: 'Snacks', price: 45, desc: 'Flaky puff pastry stuffed with spicy paneer masala.', image: 'https://images.unsplash.com/photo-1604085449552-3fb3a4d6b0af?q=80&w=1000&auto=format&fit=crop' },
  { id: 11, name: 'Cheese Garlic Bread', category: 'Snacks', price: 120, desc: 'Freshly baked baguette slices topped with garlic butter and melted cheese.', image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=1000&auto=format&fit=crop' },
  { id: 12, name: 'Custom Birthday Cake', category: 'Birthday Specials', price: 1200, desc: 'Two-tier custom fondant cake designed to your theme. (Starting price)', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1036&auto=format&fit=crop' }
];

const categories = ['All', 'Cakes', 'Pastries', 'Cookies', 'Bread', 'Snacks', 'Birthday Specials'];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrderClick = (itemName) => {
    const message = encodeURIComponent(`Hello, I would like to order: ${itemName}`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Our Menu | Lalwani Traders Bakery</title>
        <meta name="description" content="Explore our wide variety of freshly baked cakes, pastries, cookies, and breads." />
      </Helmet>

      {/* Page Header */}
      <div className="page-header menu-header">
        <div className="container">
          <h1 className="page-title animate-fade-in-up">Our Delicious Menu</h1>
          <p className="page-subtitle animate-fade-in-up">Handcrafted treats baked fresh every day</p>
        </div>
      </div>

      <section className="section section-light">
        <div className="container">
          
          {/* Filters & Search */}
          <div className="menu-controls">
            <div className="category-filters">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="search-bar">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search for cakes, breads..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Menu Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-4 menu-grid">
              {filteredItems.map(item => (
                <div className="card product-card" key={item.id}>
                  <div className="product-img-wrapper">
                    <img src={item.image} alt={item.name} className="product-img" loading="lazy" />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{item.name}</h3>
                    <p className="product-desc">{item.desc}</p>
                    <div className="product-footer">
                      <span className="product-price">₹{item.price}</span>
                      <button 
                        onClick={() => handleOrderClick(item.name)} 
                        className="btn btn-primary btn-sm"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results text-center">
              <h3>No products found</h3>
              <p>Try adjusting your search or category filter.</p>
              <button className="btn btn-secondary mt-3" onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}>
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default Menu;
