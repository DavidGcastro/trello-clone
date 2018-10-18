import React from 'react';

const Callout = () => {
  return (
    <div className="callout wrapper divider">
      <div
        className="callout--content innerPadding"
        style={{ paddingBottom: 0 }}>
        <div className="callout--textParent">
          <div>
            <span className="text--large--bold">
              Donec rutrum congue leo eget malesuada. Donec rutrum congue leo
              eget.
            </span>
            <span className="header--description">
              Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh
              pulvinar a.
            </span>
          </div>
          <input
            style={{ marginTop: 20, marginBottom: 20 }}
            value="Try For Free"
            className="button--action"
            type="button"
          />
        </div>
        <img
        resizeMode='contain'
          className="callout-image"
          src="./assets/images/time.png"
        />
      </div>
    </div>
  );
};

export default Callout;
