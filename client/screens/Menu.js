import React from 'react';

const Menu = props => {
  let { open } = props;
  return <div className={open ? 'navOpen--open' : 'navOpen--close'} />;
};

export default Menu;
