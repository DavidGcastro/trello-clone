import React from 'react';

const Header = () => {
  return (
    <div className="header wrapper">
      <img
        className="header--image"
        src="/assets/images/conference_table.png"
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
          <a
            href="mailto:davidgcastro93@gmail.com"
            target="_self"
            className="underlinedLink divider">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
