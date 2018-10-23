import React from 'react';
import { Link } from 'react-router-dom';

const Callout = props => {
  let { mainText, smallText, buttonText } = props;
  return (
    <div className="callout divider">
      <div
        className="callout--content innerPadding wrapper "
        style={{ paddingBottom: 0 }}>
        <div className="callout--textParent">
          <div>
            <span className="title--large--light right-align">{mainText}</span>
            <span className="header--description">{smallText}</span>
          </div>
          <Link to="/signup">
            <input
              style={{ marginTop: 20, marginBottom: 20 }}
              value={buttonText}
              className="button--action"
              type="button"
            />
          </Link>
        </div>

        <img className="callout-image" src="./assets/images/time.png" />
      </div>
    </div>
  );
};

export default Callout;
