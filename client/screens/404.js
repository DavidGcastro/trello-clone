import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="wrapper notFound">
      <div>
        <span
          className="text--large--bold"
          style={{ letterSpacing: 5, paddingBottom: 300 }}>
          Lost?
        </span>
      </div>
      <img
        className="stickToBottom"
        style={{ maxWidth: 300 }}
        src="/assets/images/lost.png"
      />
    </div>
  );
};

export default PageNotFound;
