import React from 'react';
import logo from '../assets/img/logo-white.png';
// import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Odyssey</span>
          <span className="heading-primary-second">is what Activates Life</span>
        </h1>
        <a href="#text" className="btn btn-white btn-animated">Explore More</a>
      </div>
    </header>
  );
};

export default Header;
