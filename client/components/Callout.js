import React from 'react';

const Callout = () => {
  return (
    <div className="callout wrapper divider">
      <div className="callout--content innerPadding">
        <div className="callout--textParent">
          <span className="text--large--bold">
            We create long-lasting, positive growth for your business.
          </span>
          <span className="header--description">
            Spring is a digital studio based in Paris with an itch for
            behavioural science, busy designing and building meaningful digital
            products and services for clients worldwide.
          </span>
        </div>
        <img
          className="callout-image"
          src="./assets/images/spring-illu-home-contact.png"
        />
      </div>
    </div>
  );
};

export default Callout;
