import React from 'react';

const Callout = () => {
  return (
    <div className="callout--parent">
      <div className="callout--content padder">
        <span className="text--large">Waffle is loved all over the world</span>
        <span className="text--reg">
          Over 100,000+ developers worldwide have made their lives easier by
          using Waffle
        </span>
        <div>
          <input
            className="button--action"
            type="submit"
            value="Start Free Trial"
          />
        </div>
      </div>
    </div>
  );
};

export default Callout;
