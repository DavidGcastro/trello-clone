import React from 'react';

const Header = () => {
  return (
    <div className="wrapper home--parent">
      <div className="home--content padder">
        <div className="home--textContainer">
          <span className="text--large">
            Make more time for the work that matters most
          </span>
          <span className="text--reg home--section">
            Baton helps you coordinate all the work your team does together. So
            everyone knows what needs to get done, who’s responsible for doing
            it, and when it’s due.
          </span>
        </div>
        <img className="centered-image" src="./assets/images/waffle.png" />
        <form className="form--parent">
          <input
            className="email-input"
            type="email"
            placeholder="name@company.com"
          />
          <input
            className="button--submit"
            type="submit"
            value="Start Free Trial"
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
