import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1 className="logo-text">
          <span>
            <Link to="/">Ragu</Link>5
          </span>
        </h1>
      </div>
      <i className="fa fa-bars menu-toggle"></i>
      <ul className="nav">
        <li>
          <Link to="/detail">Detail</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
