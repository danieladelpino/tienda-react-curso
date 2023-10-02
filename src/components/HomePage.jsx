import React from 'react';
import './styles.css/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <img src="/public/images/hero.jpg" alt="Picture HomePage" />
      <div className="shopping">
        <p> <img src="/public/images/shipping-fast-svgrepo-com.svg" alt="Icon Shipping" />We ship nationwide.</p>
        <p> <img src="/public/images/shop-bag-svgrepo-com.svg" alt="Icon Shop" />Minimum purchase of $50 for free shipping.</p>
      </div>
      <h2 className='homepage-title'>Products</h2>
    </div>

  );
};

export default HomePage;
