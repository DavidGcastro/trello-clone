import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header wrapper">
      <img
        className="header--image"
        src="./assets/images/spring_dribbble_2shot_3.png"
      />
      <div className="header--text innerPadding" style={{ paddingTop: 30 }}>
        <span className="header--title">
          Donec rutrum congue leo eget malesuada.
        </span>
        <div className="header--descriptionParent">
          <span className="header--description" style={{ fontWeight: 100 }}>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Cras ultricies ligula sed magna dictum porta.
          </span>
          <Link
            to="/contact"
            style={{
              letterSpacing: 2,
              paddingTop: 20,
              fontSize: 16,
              color: '#01010f',
              borderBottom: '1px solid #D8D9DA',
              display: 'inline-block'
            }}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
