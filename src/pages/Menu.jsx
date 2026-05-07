import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import './Menu.css';

const menuItems = [
  { id: 1, name: 'Special Gud Gajak', category: 'Gajak', price: 450, desc: 'Traditional winter delicacy made with premium jaggery and sesame seeds. (1kg)' },
  { id: 2, name: 'Dry Fruit Gajak', category: 'Gajak', price: 650, desc: 'Rich gajak loaded with almonds, cashews and pistachios. (1kg)' },
  { id: 3, name: 'Peanut Chikki', category: 'Chikki', price: 350, desc: 'Crunchy peanuts blended with sweet jaggery. (1kg)' },
  { id: 4, name: 'Til Patti', category: 'Chikki', price: 400, desc: 'Thin and crispy sesame brittle made with pure jaggery. (1kg)' },
  { id: 5, name: 'Sugar Revri', category: 'Revri', price: 250, desc: 'Small, crunchy sesame candies made with sugar. (500g)' },
  { id: 6, name: 'Gud Revri', category: 'Revri', price: 280, desc: 'Small, crunchy sesame candies made with jaggery. (500g)' },
  { id: 7, name: 'Special Namkeen Mix', category: 'Namkeens', price: 280, desc: 'A spicy and savory blend of traditional Indian namkeens. (500g)' },
  { id: 8, name: 'Aloo Bhujia', category: 'Namkeens', price: 150, desc: 'Classic crispy potato noodles with Indian spices. (500g)' },
  { id: 9, name: 'Soan Papdi', category: 'Sweets', price: 300, desc: 'Flaky, melt-in-your-mouth traditional Indian sweet. (500g)' },
  { id: 10, name: 'Besan Ladoo', category: 'Sweets', price: 500, desc: 'Roasted gram flour balls made with pure ghee. (1kg)' }
];

const categories = ['All', 'Gajak', 'Chikki', 'Revri', 'Namkeens', 'Sweets'];

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
    window.open(`https://wa.me/919415419175?text=${message}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Our Products | Shri Lalwani Traders</title>
        <meta name="description" content="Explore our wide variety of authentic Indian delicacies including gajak, chikki, revri, and namkeens." />
      </Helmet>

      {/* Page Header */}
      <div className="page-header menu-header">
        <div className="container">
          <h1 className="page-title animate-fade-in-up">Our Products</h1>
          <p className="page-subtitle animate-fade-in-up">Authentic Indian Delicacies since generations</p>
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
                placeholder="Search for products..." 
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
