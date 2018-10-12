import React from 'react';

const Callout = () => {
  return (
    <div className="callout--parent padder">
      <div className="callout--content spacer">
        <span className="text--large spacer">
          Goodie is loved all over the world
        </span>
        <span className="text--reg spacer">
          Over 100,000+ developers worldwide have made their lives easier by
          using Goodie
        </span>
      </div>
      <input
        className="button--action"
        type="submit"
        value="Start Free Trial"
      />
    </div>
  );
};

export default Callout;
