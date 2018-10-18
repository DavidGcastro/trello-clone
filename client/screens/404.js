import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div
      className="wrapper"
      style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          flex: 1,
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center'
        }}>
        <span
          className="text--large--bold"
          style={{ letterSpacing: 5, paddingBottom: 300 }}>
          Lost?
        </span>
      </div>
      <img
        className="stickToBottom"
        style={{ maxWidth: 300 }}
        src="./assets/images/spring-illu-home-contact.png"
      />
    </div>
  );
};

export default PageNotFound;
