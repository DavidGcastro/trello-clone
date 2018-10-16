import React from 'react';

const Header = () => {
  return (
    <div className="header wrapper">
      <img
        className="header--image"
        src="./assets/images/spring_dribbble_2shot_3.png"
      />
      <div className="header--text">
        <span className="header--title">The Behavioural design agency</span>
        <span className="header--description" style={{ fontWeight: 100 }}>
          Spring is a digital studio based in Paris with an itch for behavioural
          science, busy designing and building meaningful digital products and
          services for clients worldwide.
        </span>
      </div>
    </div>
  );
};

export default Header;
