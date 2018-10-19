import React from 'react';

const Header = props => {
  let { mainText, smallText, linkText, linkPath } = props;
  return (
    <div className="header wrapper">
      <img
        className="header--image"
        src="/assets/images/conference_table.png"
      />
      <div className="header--text innerPadding" style={{ paddingTop: 30 }}>
        <span className="title--large--light">{mainText}</span>
        <div className="header--descriptionParent">
          <span className="header--description" style={{ fontWeight: 100 }}>
            {smallText}
          </span>
          <a href={linkPath} target="_self" className="underlinedLink divider">
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
