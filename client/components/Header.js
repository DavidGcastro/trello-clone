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
          We collaborate with ambitious brands and people – let's build
          something great together.
        </span>
      </div>
    </div>
  );
};

export default Header;
